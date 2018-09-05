function getError(option, xhr) {
  const msg = `cannot post ${option.action} ${xhr.status}'`;
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

// option {
//  onProgress: (event: { percent: number }): void,
//  onError: (event: Error, body?: Object): void,
//  onSuccess: (body: Object): void,
//  data: Object,
//  filename: String,
//  file: File,
//  withCredentials: Boolean,
//  action: String,
//  headers: Object,
// }
export default function upload(option) {
  const xhr = new window.XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        // eslint-disable-next-line
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  const formData = new window.FormData();

  if (option.data) {
    Object.keys(option.data).forEach((key) => {
      formData.append(key, option.data[key]);
    });
  }

  const file = option.file;

  // eslint-disable-next-line
  option.file = new window.File([option.file], `${file.uid}.${file.name.split('.')[file.name.split('.').length - 1]}`, {
    type: file.type,
    uid: file.uid,
  });

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    // [{"name":"rc-upload-1536111883779-2.txt","type":"text\/plain",
    // "tmp_name":"\/tmp\/phptQa12K","error":0,"size":30249,"ext":"txt",
    // "key":"file","url":"hdfs:\/\/bjn-1:8020\/da
    // ta\/datamining\/crowd-compute\/id-mapping\/20180905\/220\/1536111890347.txt"}]

    option.onSuccess(getBody(xhr) || [{
      name: option.file.name,
      type: option.file.type,
      size: option.file.size,
      url: `${option.data.host}${option.data.dir}${option.file.name}`,
    }], xhr);
  };


  xhr.open('post', option.action, true);

  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  const headers = option.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  for (const h in headers) {
    // eslint-disable-next-line
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);

  return {
    abort() {
      xhr.abort();
    },
  };
}

import React from 'react';

import { ImageUpload as ImageUploadCustom } from 'meetyou-antd-base';

export default class ImageUpload extends React.Component {
  render() {
    const code = require('./code.html');
    const fileList = [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ];
    return (
      <div>
        <ImageUploadCustom
          action="upload/index"
          data={{
            image_style: 6,
          }}
          multiple
          size={5}
          limit={5}
          fileList={fileList}
          text={<span>点击上传</span>}
        />
        <div className="mb-10">
          <a href="https://ant.design/components/upload-cn/" target="_blank">
            https://ant.design/components/upload-cn/
          </a>
        </div>
        <code>{code}</code>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { Upload } from 'antd';

import customRequest from './request';

export default class OssUpload extends React.Component {
  render() {
    const {
      ossConfig,
    } = this.props;

    // eslint-disable-next-line
    let key = '${filename}';

    if (ossConfig.dir) {
      key = `${ossConfig.dir}/${key}`;
    }
    return (
      <Upload
        {...this.props}
        data={{
          success_action_status: 200,
          key,
          ...this.props.ossConfig,
          ...this.props.data,
        }}
        customRequest={customRequest}

      ></Upload>
    );
  }
}

OssUpload.propTypes = {
  ...Upload.propTypes,
  ossConfig: PropTypes.shape({
    dir: PropTypes.string,
    policy: PropTypes.string,
    OSSAccessKeyId: PropTypes.string,
    signature: PropTypes.string,
  }),
};

OssUpload.defaultProps = {
  ...Upload.defaultProps,
  ossConfig: {},
};

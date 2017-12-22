import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, message, Modal } from 'antd';
import classnames from 'classnames';
import lodash from 'lodash';
import styles from './index.less';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previewVisible: false,
      previewImage: '',
    };
  }
  render() {
    const { maxSize, minSize, limit, text, beforeUpload, fileList, multiple } = this.props;

    const { previewVisible, previewImage } = this.state;

    let hasUploadButton = false;

    const defaulBeforeUpload = (file) => {
      const isIMG = /(jpg|jpeg|png)$/g.test(file.type);
      if (!isIMG) {
        message.error('请上传图片');
      }
      const isMax = file.size / 1024 / 1024 <= maxSize;
      const isMin = file.size / 1024 / 1024 >= minSize;
      if (!isMax) {
        message.error(maxSize >= 1 ? `图片必须小于${maxSize}MB!` : `图片必须小于${parseInt(maxSize * 1024, 10)}K!`);
      }
      if (!isMin) {
        message.error(minSize >= 1 ? `图片必须小于${minSize}MB!` : `图片必须大于${parseInt(minSize * 1024, 10)}K!`);
      }
      return isIMG && isMax && isMin && beforeUpload(file, this.props);
    };

    const uploadButton = (
      <div>
        <Icon className={styles.anticon} type="plus" />
        <div className="ant-upload-text">{text || '点击上传'}</div>
      </div>
    );

    const handlePreview = (file) => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    };

    const handleCancel = () => {
      this.setState({ previewVisible: false });
    };

    // 添加上传按钮
    if (
      (multiple &&
        (!lodash.isNumber(limit) || (lodash.isNumber(limit) && fileList.length < limit))) ||
      fileList.length === 0
    ) {
      hasUploadButton = true;
    }

    return (
      <div className={classnames(this.props.className, styles.antImageUpload)}>
        <Upload
          {...this.props}
          {...{
            className: '',
            beforeUpload: defaulBeforeUpload,
            onPreview: handlePreview,
          }}
        >
          {hasUploadButton ? uploadButton : ''}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

ImageUpload.defaultProps = {
  ...Upload.defaultProps,
  // upload 组件属性
  accept: 'image/png,image/jpg,image/jpeg',
  listType: 'picture-card',
  beforeUpload() {
    return true;
  },
  onChange() {},
  multiple: false,

  // 自定义属性
  maxSize: 5,
  minSize: 0,
  limit: 0,
  text: <span>点击上传</span>,
};

ImageUpload.propTypes = {
  ...Upload.propTypes,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  limit: PropTypes.number,
  text: PropTypes.any,
};

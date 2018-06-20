import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Button,
} from 'antd';
import { Gallery } from 'meetyou-antd-base';
import styles from './index.less';

const code = `
\`\`\`javascript
Gallery.propTypes = {
  visible: PropTypes.bool, // 是否可见
  images: PropTypes.array, // 画廊的图片参数
  closable: PropTypes.bool, // 是否可以点击遮罩层关闭画廊
  callback: PropTypes.func, // onBeforeClose关闭画廊之前事件的回调函数
};

Gallery.defaultProps = {
  visible: false,
  images: [],
  closable: false,
  callback: () => null,
};
\`\`\`

其他参数具体参考 [lightgallery.js Docs](https://sachinchoolur.github.io/lightgallery.js/docs/api.html)
`;

class GalleryExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      pics: [],
    };
  }

  render() {
    const handleShowGallery = () => {
      this.setState({
        visible: true,
        pics: [
          'http://sc.seeyouyima.com/20171221/5a3b6bf9ac472_230_230.png',
          'http://sc.seeyouyima.com/20180122/5a657b101f594_300_364.jpg',
          'http://sc.seeyouyima.com/20161206/58460caa1a65f_640_1136.png',
          'http://sc.seeyouyima.com/20171221/5a3b6c23b553f_230_230.png',
        ],
      });
    };

    const handleCancle = () => {
      this.setState({
        visible: false,
        pics: [],
      });
    };

    return (
      <div>
        <Button onClick={handleShowGallery}>Show Image Gallery</Button>
        <div
          className={styles.imageGalleryContainer}
          style={{ display: this.state.visible ? 'block' : 'none' }}
        >
          <Gallery
            visible={this.state.visible}
            images={this.state.pics}
            index={0}
            loop={false}
            share={false}
            download
            callback={handleCancle}
          />
        </div>
        <div className="mt-10">
          <ReactMarkdown source={code} />
        </div>
      </div>
    );
  }
}

export default GalleryExample;

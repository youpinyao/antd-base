import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'lightgallery.js/lib/js/lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css';
import './lib/lg-fullscreen';
import './lib/lg-zoom';
import './lib/lg-pager';
import './lib/lg-autoplay';
import './lib/lg-share';
import styles from './index.less';

const LightGallery = window.lightGallery;

const propTypes = {
  visible: PropTypes.bool, // 是否可见
  images: PropTypes.array, // 画廊的图片参数
  // eslint-disable-next-line
  closable: PropTypes.bool, // 是否可以点击遮罩层关闭画廊
  callback: PropTypes.func, // onBeforeClose关闭画廊之前事件的回调函数
};

const defaultProps = {
  visible: false,
  images: [],
  closable: false,
  callback: () => null,
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.showGallery = this.showGallery.bind(this);
  }
  componentWillReceiveProps(props) {
    const { callback } = this.props;
    if (props.visible && this.props.visible !== props.visible && this.$el) {
      setTimeout(() => {
        LightGallery(this.$el.get(0), { ...props });

        this.$el.bind('onBeforeClose', () => {
          if (callback) {
            callback();
          }
          this.$el.remove();
        });
        this.showGallery();
      });
    }
  }
  showGallery() {
    if (this.$el) {
      $(
        this.$el
          .find('div')
          .eq(0)
          .get(0),
      ).trigger('click');
    }
  }
  render() {
    const { visible, images } = this.props;
    return (
      <div
        className={styles.galleryInit}
        style={{ display: visible ? 'block' : 'none' }}
        ref={(el) => {
          if (el) {
            this.$el = $(el);
          }
        }}
      >
        {images.map((image, key) => {
          const pic = image;
          return <div data-src={pic} key={key} onClick={e => e.stopPropagation()} />;
        })}
      </div>
    );
  }
}

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;

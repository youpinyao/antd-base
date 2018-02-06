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
  callback: PropTypes.func, // onBeforeClose关闭画廊之前事件的回调函数
};

const defaultProps = {
  visible: false,
  images: [],
  callback: () => null,
};

class Gallery extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      visible,
      images,
      callback,
    } = this.props;
    return (
      <div
        id="gallery"
        className={styles.galleryInit}
        style={{ display: visible ? 'block' : 'none' }}
        ref={
          (el) => {
            if (el) {
              const $el = $(el);
              LightGallery(el, { ...this.props });
              $($el.find('div').eq(0).get(0)).trigger('click');
              $el.bind('onBeforeClose', () => {
                if (callback) {
                  callback();
                }
                $el.remove();
              });
            }
          }
        }
      >
        {images.map((image, key) => {
          let pic = image;
          if (/.gif/g.test(`${pic}`.toLowerCase())) {
            if (/\?/g.test(`${pic}`.toLowerCase())) {
              pic += `&t=${+new Date()}`;
            } else {
              pic += `?t=${+new Date()}`;
            }
          }
          return <div data-src={pic} key={key}></div>;
        })}
      </div>
    );
  }
}

export default Gallery;

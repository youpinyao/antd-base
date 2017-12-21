import React from 'react';

import {
  Button,
} from 'antd';

import { Loading as LoadingCustom } from 'meetyou-antd-base';
import { setTimeout } from 'timers';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      full: false,
    };
  }
  render() {
    const code = require('./code.html');

    const {
      show,
      full,
    } = this.state;

    const showLoading = () => {
      this.setState({
        show: true,
      });

      setTimeout(() => {
        this.setState({
          show: false,
        });
      }, 3000);
    };

    const toggleFull = () => {
      this.setState({
        full: !full,
      });
    };
    return (
      <div
        style={{
          position: 'relative',
        }}
      >
        <Button className="mb-15" onClick={showLoading} type="primary">显示loading 3秒</Button>
        <Button className="mb-15 ml-10" onClick={toggleFull} type="primary">{full ? '设置为非全屏' : '设置为全屏'}</Button>
        <LoadingCustom show={show} full={full} />

        <code>{code}</code>
      </div>
    );
  }
}

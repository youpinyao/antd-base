import React from 'react';

import { SecondMenu as SecondMenuCustom } from 'meetyou-antd-base';

export default class SecondMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      full: false,
    };
  }
  render() {
    const code = require('./code.html');

    return (
      <div>
        <SecondMenuCustom
          className="mb-20"
          style={{
            position: 'static',
          }}
        >
          <SecondMenuCustom.Item active link="#">
            女人通账户
          </SecondMenuCustom.Item>
          <SecondMenuCustom.Item link="#">协作者</SecondMenuCustom.Item>
        </SecondMenuCustom>
        <code>{code}</code>
      </div>
    );
  }
}

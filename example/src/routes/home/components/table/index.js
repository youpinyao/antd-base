import React from 'react';

import { Table as TableCustom } from 'meetyou-antd-base';

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
        <TableCustom />
        <code>{code}</code>
      </div>
    );
  }
}

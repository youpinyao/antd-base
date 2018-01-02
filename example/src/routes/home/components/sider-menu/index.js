import React from 'react';

import { SiderMenu as SiderMenuCustom } from 'meetyou-antd-base';

const { Content, Item } = SiderMenuCustom;

export default class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const code = require('./code.html');

    return (
      <div>
        <SiderMenuCustom static title="我是SiderMenu标题">
          <Content>
            <Item title="菜单1" active />
            <Item title="菜单2">
              <Content>
                <Item title="菜单2-1" active />
                <Item title="菜单2-2" />
                <Item title="菜单2-3" />
              </Content>
            </Item>
          </Content>
        </SiderMenuCustom>
        <code className="mt-20">{code}</code>
      </div>
    );
  }
}

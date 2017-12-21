import React from 'react';
import { connect } from 'dva';
import { Collapse } from 'antd';

import ImageUpload from './components/image-upload';
import Loading from './components/loading';
import SecondMenu from './components/second-menu';

const Panel = Collapse.Panel;

class Home extends React.Component {
  render() {
    return (
      <Collapse accordion defaultActiveKey="SecondMenu">
        <Panel header="ImageUpload" key="ImageUpload">
          <ImageUpload />
        </Panel>
        <Panel header="Loading" key="Loading">
          <Loading />
        </Panel>
        <Panel header="RootLayout" key="RootLayout">
          默认加了一个className 限定最小宽度 @root-min-width
        </Panel>
        <Panel header="SecondMenu" key="SecondMenu">
          <SecondMenu />
        </Panel>
      </Collapse>
    );
  }
}

export default connect(({ home, app }) => ({
  home,
  app,
}))(Home);

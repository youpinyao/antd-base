import React from 'react';
import { connect } from 'dva';
import { Collapse } from 'antd';

import ImageUpload from './components/image-upload';
import Loading from './components/loading';

const Panel = Collapse.Panel;

class Home extends React.Component {
  render() {
    return (
      <Collapse accordion defaultActiveKey="Loading">
        <Panel header="ImageUpload" key="ImageUpload">
          <ImageUpload />
        </Panel>
        <Panel header="Loading" key="Loading">
          <Loading />
        </Panel>
      </Collapse>
    );
  }
}

export default connect(({ home, app }) => ({
  home,
  app,
}))(Home);

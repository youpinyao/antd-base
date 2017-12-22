import React from 'react';
import { connect } from 'dva';
import { Collapse, Col, Row } from 'antd';

import ImageUpload from './components/image-upload';
import Loading from './components/loading';
import SecondMenu from './components/second-menu';
import Table from './components/table';

const Panel = Collapse.Panel;

class Home extends React.Component {
  render() {
    return (
      <Row>
        <Col span={1} />
        <Col span={22}>
          <Collapse accordion defaultActiveKey="ImageUpload">
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
            <Panel header="Table" key="Table">
              <Table />
            </Panel>
          </Collapse>
        </Col>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(({ home, app }) => ({
  home,
  app,
}))(Home);

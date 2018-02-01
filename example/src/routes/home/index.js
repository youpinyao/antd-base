import React from 'react';
import { connect } from 'dva';
import { Collapse, Col, Row, Button } from 'antd';
import { Container } from 'meetyou-antd-base';

import ImageUpload from './components/image-upload';
import Loading from './components/loading';
import SecondMenu from './components/second-menu';
import Table from './components/table';
import SiderMenu from './components/sider-menu';


const Panel = Collapse.Panel;

class Home extends React.Component {
  render() {
    return (
      <Container className="mt-20 mb-20 ml-20 mr-20">
        <Row>
          <Col span={24}>
            <div className="pb-20">
              <Button className="mr-10">btn</Button>
              <Button className="mr-10" type="primary">btn</Button>
              <Button className="mr-10" type="dashed">btn</Button>
              <Button className="mr-10" type="danger">btn</Button>
            </div>
            {/* defaultActiveKey="Table" */}
            <Collapse accordion>
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
              <Panel header="SiderMenu" key="SiderMenu">
                <SiderMenu />
              </Panel>
              <Panel header="Container" key="Container">
                <Container>我是Container</Container>
              </Panel>
              <Panel header="MultiFormItem" key="MultiFormItem">
                <Container>继承自From.Item，用于识别多个需要验证的表单组件，原来的Item只会识别第一个表单组件</Container>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(({ home, app }) => ({
  home,
  app,
}))(Home);

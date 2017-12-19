import React from 'react';
import {
  Layout,
} from 'antd';
import styles from './index.less';

export default class RootLayout extends React.Component {
  render() {
    return (
      <Layout className={styles.rootLayout}>{this.props.children}</Layout>
    );
  }
}

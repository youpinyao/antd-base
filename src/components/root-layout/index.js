import React from 'react';
import classnames from 'classnames';
import { Layout } from 'antd';
import styles from './index.less';

export default class RootLayout extends React.Component {
  render() {
    return (
      <Layout {...this.props} className={classnames(this.props.className, styles.rootLayout)}>
        {this.props.children}
      </Layout>
    );
  }
}

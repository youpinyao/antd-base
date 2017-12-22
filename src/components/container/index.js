import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

export default class Container extends React.Component {
  render() {
    return (
      <div {...this.props} className={classnames(this.props.className, styles.container)}>
        {this.props.children}
      </div>
    );
  }
}

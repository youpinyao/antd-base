import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class SiderMenuContent extends React.Component {
  render() {
    console.log(this.context);
    return (
      <div
        {...this.props}
        className={classnames(
          styles.siderMenuContent,
          this.props.className,
          this.context.expand === false ? styles.hide : undefined,
        )}
      >
        {this.props.children}{this.context.expand}
      </div>
    );
  }
}

SiderMenuContent.contextTypes = {
  expand: PropTypes.bool,
};

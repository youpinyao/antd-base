import React from 'react';
import 'antd/lib/spin/style/index.less';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.less';

export default class Loading extends React.Component {
  render() {
    const { full, show } = this.props;
    const style = this.props.style || {};

    // const icon = <Icon type="loading" style={{ fontSize: 60 }} spin />;

    return (
      <div
        style={style}
        className={classnames(styles.loading, full ? styles.full : '', show ? styles.show : '')}
      >
        {/* <Spin className={styles.spin} size="large" tip={this.props.children} /> */}
        <div className={classnames('ant-spin ant-spin-lg ant-spin-spinning ant-spin-show-text', styles.spin)}>
          <span className="ant-spin-dot">
            <i />
            <i />
            <i />
            <i />
          </span>
          <div className="ant-spin-text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Loading.propTypes = {
  full: PropTypes.bool,
  show: PropTypes.bool,
};

Loading.defaultProps = {
  full: true,
  show: false,
};

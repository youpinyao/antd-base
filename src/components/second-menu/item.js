import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.less';

export default class SecondMenuItem extends React.Component {
  render() {
    const cls = this.props.active ? styles.active : '';
    const href = this.props.link || 'javascript:void(0)';

    return (
      <li
        {...this.props}
        {...{
          active: undefined,
        }}
        className={classnames(this.props.className, cls)}
      >
        <a href={href}>{this.props.children}</a>
      </li>
    );
  }
}

SecondMenuItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
};

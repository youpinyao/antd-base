import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class MASecondMenuItem extends React.Component {
  render() {
    const cls = this.props.active ? styles.active : '';
    const href = this.props.link || 'javascript:void(0)';

    return (
      <li className={cls}>
        <a href={href}>{this.props.children}</a>
      </li>
    );
  }
}

MASecondMenuItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
};

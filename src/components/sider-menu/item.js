import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import classnames from 'classnames';
import styles from './index.less';

export default class SiderMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: props.expand || false,
    };
  }

  getChildContext() {
    return {
      expand: this.state.expand,
    };
  }

  render() {
    const { title, active } = this.props;

    let { onClick } = this.props;

    const { expand } = this.state;

    const toggleMenu = (e) => {
      this.setState({
        expand: !expand,
      });
      e.stopPropagation();
    };

    const props = Object.assign({}, this.props);
    const hasChild = !!this.props.children;
    const arrow = expand ? (
      <Icon type="up" onClick={toggleMenu} />
    ) : (
      <Icon type="down" onClick={toggleMenu} />
    );
    const icon = hasChild ? arrow : '';

    delete props.title;
    delete props.onClick;
    delete props.active;

    if (!onClick) {
      onClick = toggleMenu;
    }

    return (
      <div
        {...props}
        onClick={onClick}
        className={classnames(styles.siderMenuItem, this.props.className)}
      >
        <a
          href="javascript:void(0);"
          className={classnames(
            active ? styles.active : undefined,
            hasChild ? styles.arrow : undefined,
          )}
          onClick={onClick}
        >
          <span>{title}</span>
          {icon}
        </a>
        {this.props.children}
      </div>
    );
  }
}

SiderMenuItem.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
  expand: PropTypes.bool,
};

SiderMenuItem.childContextTypes = {
  expand: PropTypes.bool,
};

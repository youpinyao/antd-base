import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import classnames from 'classnames';
import SiderMenuContent from './content';
import SiderMenuItem from './item';
import styles from './index.less';

class SiderMenu extends React.Component {
  state = {
    position: undefined,
    top: 0,
    left: undefined,
  };
  componentDidMount() {
    $('body').addClass('has-sider-menu');
    this.setTop();
    $(window).on('scroll', this.setTop.bind(this));
    $(window).on('resize', this.setTop.bind(this));
  }

  componentWillUnmount() {
    $('body').removeClass('has-sider-menu');
    $(window).off('scroll', this.setTop.bind(this));
    $(window).off('resize', this.setTop.bind(this));
  }

  setTop() {
    const offsetTop = this.props.offsetTop || 0;
    const leftScroll = this.props.leftScroll;
    let top = $(window).scrollTop();

    top += offsetTop;

    if (top < 0) {
      top = 0;
    }

    this.setState({
      position: 'fixed',
      top,
    });

    if (leftScroll) {
      this.setState({
        left: -$(window).scrollLeft(),
      });
    }
  }

  render() {
    const { top, left, position } = this.state;
    const staticModel = this.props.static;
    const title = <div className={styles.siderMenuTitle}>{this.props.title}</div>;
    const props = Object.assign({}, this.props);

    delete props.title;
    delete props.leftScroll;
    delete props.offsetTop;
    delete props.static;

    return (
      <div
        {...props}
        className={classnames(styles.siderMenu, this.props.className)}
        style={{
          top: staticModel ? undefined : top,
          left: staticModel ? undefined : left,
          position: staticModel ? undefined : position,
        }}
      >
        {this.props.title ? title : ''}
        {this.props.children}
      </div>
    );
  }
}

SiderMenu.propTypes = {
  title: PropTypes.string,
  offsetTop: PropTypes.number,
  leftScroll: PropTypes.bool,
  static: PropTypes.bool,
};

SiderMenu.defaultProps = {
  offsetTop: 0,
  leftScroll: false,
  static: false,
};

SiderMenu.Content = SiderMenuContent;
SiderMenu.Item = SiderMenuItem;

export default SiderMenu;

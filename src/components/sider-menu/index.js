import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import classnames from 'classnames';
import SiderMenuContent from './content';
import SiderMenuItem from './item';
import styles from './index.less';

class SiderMenu extends React.Component {
  componentDidMount() {
    $('body').addClass('has-sider-menu');
  }

  componentWillUnmount() {
    $('body').removeClass('has-sider-menu');
  }

  render() {
    const title = <div className={styles.siderMenuTitle}>{this.props.title}</div>;
    const props = Object.assign({}, this.props);

    delete props.title;

    return (
      <div {...props} className={classnames(styles.siderMenu, this.props.className)}>
        {this.props.title ? title : ''}
        {this.props.children}
      </div>
    );
  }
}

SiderMenu.propTypes = {
  title: PropTypes.string,
};

SiderMenu.Content = SiderMenuContent;
SiderMenu.Item = SiderMenuItem;

export default SiderMenu;

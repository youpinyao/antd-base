import React from 'react';
import $ from 'jquery';
import classnames from 'classnames';
import styles from './index.less';

import Item from './item';

class SecondMenu extends React.Component {

  componentDidMount() {
    $('body').addClass('has-second-nav');
  }

  componentWillUnmount() {
    $('body').removeClass('has-second-nav');
  }

  render() {
    return (
      <div {...this.props} className={classnames(this.props.className, styles.secondNav)}>
        <ul className="clearfix">{this.props.children}</ul>
      </div>
    );
  }
}

SecondMenu.Item = Item;

export default SecondMenu;

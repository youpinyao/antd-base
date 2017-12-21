import React from 'react';
import { connect } from 'dva';

class Home extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default connect(({ home, app }) => ({
  home,
  app,
}))(Home);


import 'babel-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import browserHistory from 'dva/router';

import 'meetyou-antd-base/less/theme.less';
import 'less/global.less';

// mock
console.log('env', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  require('../mock');
}

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: browserHistory,
  onError: (data) => {
    console.error('error', data);
  },
});

// 2. Model
app.model(require('./models/app'));

// 3. Router
app.router(require('./router'));

// 4. Start
app.start('#root');

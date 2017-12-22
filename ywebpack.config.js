const path = require('path');
const fs = require('fs');
// const aliOss = require('meetyou-ali-oss');
const lessToJs = require('less-vars-to-js');

const less = fs.readFileSync('./src/less/vars.less', 'utf8');
const vars = lessToJs(less);

module.exports = {
  devtool: 'source-map',
  port: '8080',
  host: '0.0.0.0',
  path: 'example/dist',
  vendors: ['react', 'dva', 'antd', 'jquery', 'moment', 'js-cookie', 'babel-polyfill'],
  entrys: [{
    template: 'example/src/index.html',
    filename: 'index.html',
    entry: 'example/src/index.js',
  }],
  lessOptions: {
    modifyVars: vars,
  },
  production: {
    publicPath: './',
    extraBabelPlugins: [
      ['import', {
        libraryName: 'antd',
        style: true,
      }],
    ],
  },
  development: {
    publicPath: '/',
    extraBabelPlugins: [
      'dva-hmr', ['import', {
        libraryName: 'antd',
        style: true,
      }],
    ],
  },
  afterBuild() {

  },
  webpackMerge: {
    resolve: {
      alias: {
        antdes: path.resolve(__dirname, './node_modules/antd/es'),
        antdstyle: path.resolve(__dirname, './node_modules/antd/es/style'),
        less: path.resolve(__dirname, 'example/src/less'),
        images: path.resolve(__dirname, 'example/src/images'),
        'meetyou-antd-base': path.resolve(__dirname, './'),
      },
    },
  },
};

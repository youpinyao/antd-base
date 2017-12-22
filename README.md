# meetyou-antd-base
对antd的主题定制，基于antd3.x

## 主题引入
```
// theme.less在入口js文件引入
import 'meetyou-antd-base/src/theme.less';

// vars.less less-loader引入
const less = fs.readFileSync('./node_modules/meetyou-antd-base/src/less/vars.less', 'utf8');
const vars = lessToJs(less);

// less-loader options
{
    modifyVars: vars,
}
```
## 定制组件引用
```
import {
    Table,
} from 'meetyou-antd-base';
```
## 组件列表
- ImageUpload
- Loading
- RootLayout
- SecondMenu
- Table
- SiderMenu
- Container

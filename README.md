# meetyou-antd-base
对antd的主体定制

## 主题引入
```
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

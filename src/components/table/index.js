import React from 'react';
import { Table, Input, Select } from 'antd';
import styles from './index.less';

const Option = Select.Option;

const defaultPageSelect = [10, 15, 20];

export default class MATable extends React.Component {
  render() {
    let inputValue = 1;
    const pageSelect = this.props.pageSelect || defaultPageSelect;
    const pagination = this.props.pagination || {};
    const onChange = this.props.onChange || function fn() {};

    if (pagination) {
      inputValue = pagination.current || inputValue;
    }

    function onPressEnter(e) {
      onChange({
        ...pagination,
        current: parseInt(e.target.value, 10),
      });
    }

    function handleSelect(size) {
      onChange({
        ...pagination,
        current: 1,
        pageSize: parseInt(size, 10),
      });
    }

    return (
      <div className={styles.maTable}>
        <Table {...this.props} />
        <div className={styles.jump}>
          <span>跳至第</span>
          <Input
            className={styles.numberInput}
            onPressEnter={onPressEnter}
            defaultValue={inputValue}
          />
          <span>页</span>
        </div>
        <div className={styles.select}>
          <Select value={`${pagination.pageSize}`} onChange={handleSelect}>
            {
              pageSelect.map((s) => {
                return (
                  <Option key={`${s}`} value={`${s}`}>{s} 条 / 页</Option>
                );
              })
            }
          </Select>
        </div>
      </div>
    );
  }
}

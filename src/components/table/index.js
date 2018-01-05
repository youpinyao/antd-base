import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Table, Input, Select } from 'antd';
import styles from './index.less';

const Option = Select.Option;

export default class MATable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.pagination ? this.props.pagination.current : 1,
      pagination: {
        total: 0,
        pageSize:
          this.props.pagination === undefined && this.props.pageSize !== undefined
            ? this.props.pageSize
            : 10,
        current: 1,
      },
    };
    const onChangeFn = props.onChange || function fn() {};
    const pagination = this.props.pagination || this.state.pagination;

    onChangeFn(pagination);
  }

  render() {
    const pageSelect = this.props.pageSelect;
    const pagination =
      this.props.pagination === undefined ? this.state.pagination : this.props.pagination;
    const onChangeFn = this.props.onChange || function fn() {};

    if (this.props.total !== undefined && this.props.pagination === undefined) {
      pagination.total = this.props.total;
    }

    const onChange = (np, filters, sorter) => {
      const newPagination = {
        ...pagination,
        ...np,
      };

      this.setState({
        pagination: newPagination,
        inputValue: newPagination.current,
      });
      onChangeFn(newPagination, filters, sorter);
    };

    const onPressEnter = (e) => {
      const newPagination = {
        ...pagination,
        current: parseInt(e.target.value, 10),
      };

      if (newPagination.current > Math.ceil(pagination.total / pagination.pageSize)) {
        newPagination.current = Math.ceil(pagination.total / pagination.pageSize);
      }
      if (newPagination.current >= 0) {
        newPagination.current = 1;
      }

      this.setState({
        pagination: newPagination,
        inputValue: newPagination.current,
      });

      onChangeFn(newPagination);
    };

    const handleSelect = (size) => {
      const newPagination = {
        ...pagination,
        current: 1,
        pageSize: parseInt(size, 10),
      };

      this.setState({
        pagination: newPagination,
        inputValue: newPagination.current,
      });

      onChangeFn(newPagination);
    };

    return (
      <div className={styles.maTable}>
        <Table {...this.props} pagination={pagination} onChange={onChange} />
        <div className={classnames(styles.jump, pagination === false ? styles.none : '')}>
          <span>跳至第</span>
          <Input
            className={classnames(styles.numberInput)}
            onPressEnter={onPressEnter}
            onChange={(e) => {
              this.setState({ inputValue: e.target.value });
            }}
            value={this.state.inputValue}
          />
          <span>页</span>
        </div>
        <div className={classnames(styles.select, pagination === false ? styles.none : '')}>
          <Select value={`${pagination.pageSize}`} onChange={handleSelect}>
            {pageSelect.map((s) => {
              return (
                <Option key={`${s}`} value={`${s}`}>
                  {s} 条 / 页
                </Option>
              );
            })}
          </Select>
        </div>
      </div>
    );
  }
}

MATable.defaultProps = {
  ...Table.defaultProps,
  pageSelect: [10, 15, 20],
  total: 0,
  pageSize: 10,
};

MATable.propTypes = {
  ...Table.propTypes,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  pageSelect: PropTypes.arrayOf(PropTypes.number),
};

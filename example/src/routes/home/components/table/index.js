import React from 'react';

import { Table as TableCustom } from 'meetyou-antd-base';
import { setTimeout } from 'timers';

import { tableColumns } from './columns';
import tableData from './tableData';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  render() {
    const code = require('./code.html');

    const { loading } = this.state;

    const onChange = (pagination) => {
      this.setState({
        loading: true,
      });
      this.setState({
        pagination,
      });

      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 1000);

      console.log(pagination);
    };

    return (
      <div>
        <TableCustom
          className="mb-20"
          onChange={onChange}
          columns={tableColumns()}
          rowKey={record => record.user_id}
          dataSource={tableData}
          total={tableData.length * 2}
          loading={loading}
        />
        <div className="mb-10">
          <a href="https://ant.design/components/table-cn/" target="_blank">
            https://ant.design/components/table-cn/
          </a>
        </div>
        <code>{code}</code>
      </div>
    );
  }
}

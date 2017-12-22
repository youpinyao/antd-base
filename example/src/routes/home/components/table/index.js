import React from 'react';

import { Table as TableCustom } from 'meetyou-antd-base';
import { setTimeout } from 'timers';

import { tableColumns } from './columns';
import tableData from './tableData';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSelect: [2, 4, 8],
      loading: false,
      pagination: {
        total: tableData.length,
        pageSize: 2,
        current: 1,
      },
    };
  }
  render() {
    const code = require('./code.html');

    const { pageSelect, pagination, loading } = this.state;

    const onChange = (page) => {
      this.setState({
        loading: true,
      });
      this.setState({
        pagination: page,
      });

      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 1000);
    };

    return (
      <div>
        <TableCustom
          className="mb-20"
          onChange={onChange}
          columns={tableColumns()}
          rowKey={record => record.user_id}
          dataSource={tableData}
          pagination={pagination}
          pageSelect={pageSelect}
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

import React from 'react';

import {
  Button,
} from 'antd';
import { Table as TableCustom } from 'meetyou-antd-base';
import { setTimeout } from 'timers';

import { tableColumns } from './columns';
import tableData from './tableData';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pagination: {
        current: 1,
        pageSize: 10,
        total: tableData.length * 2,
      },
    };
  }
  render() {
    const code = require('./code.html');

    const { loading, pagination } = this.state;

    const onChange = (pag) => {
      this.setState({
        loading: true,
      });
      this.setState({
        pagination: pag,
      });

      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 1000);

      console.log(pag);
    };

    const doReset = () => {
      this.setState({
        pagination: {
          current: 1,
          pageSize: 10,
          total: tableData.length * 2,
        },
      });
    };

    return (
      <div>
        <div className="pb-10">
          <Button onClick={doReset}>重置</Button>
        </div>
        <TableCustom
          className="mb-20"
          onChange={onChange}
          columns={tableColumns()}
          rowKey={record => record.user_id}
          pagination={pagination}
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

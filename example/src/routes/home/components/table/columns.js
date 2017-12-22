export function tableColumns() {
  return [
    {
      title: '推广账户',
      dataIndex: 'real_name',
      sorter: false,
    },
    {
      title: '用户名',
      dataIndex: 'user_name',
      sorter: false,
    },
    {
      title: '点击数',
      dataIndex: 'clicks',
      sorter: false,
    },
    {
      title: '点击率',
      dataIndex: 'ctr',
      sorter: false,
    },
    {
      title: '消费（元）',
      dataIndex: 'amount',
      sorter: false,
    },
    {
      title: '剩余预算（元）',
      dataIndex: 'remain_amount',
      sorter: false,
    },
  ];
}

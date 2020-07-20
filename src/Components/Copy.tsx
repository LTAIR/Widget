import React from 'react';
import { Table } from 'antd';
import useColumns from './columns';

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

const Copy = () => {
    const columns = useColumns();
    return (
        <Table
        dataSource={dataSource}
        columns={columns}
        />
    )
}
export default Copy;
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
  },
  {
    title: 'Mã hàng',
    dataIndex: 'maHang',
  },
  {
    title: 'Tên hàng',
    dataIndex: 'tenHang',
  },
  {
    title: 'Giá bán',
    dataIndex: 'giaBan',
  },
  {
    title: 'Giá vốn',
    dataIndex: 'giaVon',
  },
  {
    title: 'Tồn kho',
    dataIndex: 'TonKho',
  },
  {
    title: 'KH đặt',
    dataIndex: 'khDat',
  },
  {
    title: 'Dự kiến hết hàng',
    dataIndex: 'duKienHetHang',
  },
];

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    stt: i + 1,
    key: i,
    maHang: `Edward King ${i}`,
    tenHang: `Edward King ${i}`,
    giaBan: `London, Park Lane no. ${i}`,
    giaVon: 15000,
    TonKho: 12,
    khDat: 0,
    duKienHetHang: '__',
  });
}

class TableData extends React.Component {
  render() {
    return <Table columns={columns} dataSource={data} />;
  }
}

export default TableData;

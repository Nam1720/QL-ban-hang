import React, { useEffect } from 'react';
import { Table, Space, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getListGuest } from '../_api/index';
import { setListGuest } from '../_store/guestSlice';

const columns = [
  {
    title: 'STT',
    dataIndex: 'STT',
    key: 'STT',
    render: (text, record, index) => <span>{index + 1}</span>
  },
  {
    title: 'Mã khách hàng',
    dataIndex: 'codeGust',
    key: 'codeGust',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'nameGust',
    key: 'nameGust',
  },
  {
    title: 'Số Điện Thoại',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tổng bán',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Hoạt động',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="primary" shape="round" size='small' style={{ background: '#4bac4d', border: 'none' }}>Cập nhật</Button>
        <Button type="primary" shape="round" size='small' danger>Xóa</Button>
      </Space>
    ),
  },
];


const GuestTable = () => {
  const listGuest = useSelector(state => state.guest.listGuest)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    getListGuest('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjdjNmVkZjY0NTExOTZmMDBmN2YzNGEiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjUyNDMxMjQyfQ.6Q6UDMn-mSeUyNZTkeYFbAuoTMAFo6D6O6pcJl13qeE')
      .then(res => {
        if (res.data.success) {
          dispatch(setListGuest(res.data.GustList))
        }
      })
  }, [])

  return (
    <div style={{ marginTop: '30px' }}>
      <Table columns={columns} dataSource={listGuest} />
    </div>
  );
};

export default GuestTable;

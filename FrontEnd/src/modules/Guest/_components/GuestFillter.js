import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setModalAdd } from '../_store/guestSlice'

const GuestFillter = () => {
  const dispatch = useDispatch()

  const handleClickAdd = () => {
    dispatch(setModalAdd(true))
  }

  return (
    <div className='d-flex align-items-center justify-content-between' style={{ width: '50%' }}>
      <Input addonAfter={<SearchOutlined />} placeholder="Theo mã, tên, điện thoại" style={{ width: '70%' }} />
      <Button onClick={() => handleClickAdd()} className='font-weight-bold ' type="primary" icon={<PlusOutlined />} style={{ borderRadius: '8px' }} >Khách Hàng</Button>
    </div>
  );
};

export default GuestFillter;

import React, { } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setModalAdd } from '../_store/staffSlice';
const StaffFillter = () => {
  // const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const loading = false

  const handleClicKAdd = () => {
    dispatch(setModalAdd(true))
  }

  return (
    <div className='d-flex align-items-center justify-content-between' style={{ width: '50%' }}>
      <Input addonAfter={loading ? <LoadingOutlined /> : <SearchOutlined />} placeholder="Theo mã, tài khoản, tên" style={{ width: '70%' }} allowClear />
      <Button onClick={() => handleClicKAdd()} className='font-weight-bold ' type="primary" icon={<PlusOutlined />} style={{ borderRadius: '8px' }} >Nhân viên</Button>
    </div>
  );
};

export default StaffFillter;

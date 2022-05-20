import React, { useRef, useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setListInvoice } from '../_store/invoiceSlice';
import { findInvoice } from '../_api/'
import { openNotificationWithIcon } from '../../../helpers/funcs';

const InvoiceFillter = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const debounceRef = useRef()

  const handleChangeInput = (value) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    setLoading(true)
    debounceRef.current = setTimeout(() => {
      findInvoice(value)
        .then(res => {
          if (res.data.success) {
            dispatch(setListInvoice(res.data.arrayFind))
            setLoading(false)
          } else {
            openNotificationWithIcon('error', res.data.message)
          }
        })
        .catch(() => {
          openNotificationWithIcon('error', 'Có lỗi xảy ra, xin vui lòng thử lại!')
        })
    }, 600);
  }

  return (
    <div className='d-flex align-items-center justify-content-between' style={{ width: '50%' }}>
      <Input onChange={e => handleChangeInput(e.target.value)} addonAfter={loading ? <LoadingOutlined /> : <SearchOutlined />} placeholder="Theo mã hóa đơn" style={{ width: '70%' }} allowClear />
    </div>
  );
};

export default InvoiceFillter;

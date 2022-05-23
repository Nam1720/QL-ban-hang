import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined, DollarOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
import { GetInvoiceToday } from '../_api';
import { openNotificationWithIcon, formatPriceVND, handleTotal } from '../../../helpers/funcs';

const DashboardOverview = () => {
  const [count, setCount] = useState(0)
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalOld, setTotalOld] = useState(0)

  const date = new Date().toJSON().split('T')
  
  useEffect(() => {
    GetInvoiceToday([date[0], date[0]])
      .then((res) => {
        if (res.data.success) {
          setCount(res.data.arrayFind.length)
          const total = handleTotal(res.data.arrayFind)
          setTotalRevenue(total[0])
          setTotalOld(total[1])
        } else {
          openNotificationWithIcon('error', res.data.message)
        }
      })
      .catch(() => openNotificationWithIcon('error', 'Có lỗi xảy ra xin vui lòng thử lại!'))
  }, [])

  return (
    <div className='dashboard__overview'>
      <h3 className='font-weight-bold' >KẾT QUẢ BÁN HÀNG HÔM NAY</h3>
      <div className='list d-flex-center justify-content-around'>
        <div className='d-flex-center flex-column' style={{ width: '25%', padding: '12px 24px', background: '#0dcaf0', borderRadius: '8px', color: '#fff' }} >
          <ShoppingCartOutlined style={{ fontSize: '40px' }} />
          <p style={{ fontSize: '20px', margin: '0', fontWeight: 'bold' }}>Số hóa đơn: {count}</p>
        </div>
        <div className='d-flex-center flex-column' style={{ width: '25%', padding: '12px 24px', background: '#ffca2c', borderRadius: '8px', color: '#fff' }} >
          <DollarOutlined style={{ fontSize: '40px' }} />
          <p style={{ fontSize: '20px', margin: '0', fontWeight: 'bold' }} >Tổng doanh thu: {formatPriceVND(totalRevenue)}</p>
        </div>
        <div className='d-flex-center flex-column' style={{ width: '25%', padding: '12px 24px', background: '#157347', borderRadius: '8px', color: '#fff' }} >
          <SafetyCertificateOutlined style={{ fontSize: '40px' }} />
          <p style={{ fontSize: '20px', margin: '0', fontWeight: 'bold' }} >Lợi nhuận: {formatPriceVND(totalRevenue - totalOld)}</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview;

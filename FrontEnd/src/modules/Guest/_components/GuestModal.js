import React, { useState } from 'react';
import { Modal, Form, Input, Button, Space } from 'antd';
import { SaveOutlined, StopOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setModalAdd, updateListGuest } from '../_store/guestSlice';
import { addGuest } from '../_api/index';

const GuestModal = () => {
  const modalAdd = useSelector(state => state.guest.modalAdd)
  const dispatch = useDispatch()

  const [nameGust, setNameGust] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = () => {
    if (nameGust != '') {
      const data = {
        tokenAdmin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjdjNmVkZjY0NTExOTZmMDBmN2YzNGEiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjUyNDc2OTcwfQ.E6yDd2dk4u1hntER5xus6IPqLPxCdihw2HbKGaZAvLw',
        nameGust,
        phone,
        address
      }
      addGuest(data)
        .then(res => {
          if (res.data.success) {
            dispatch(setModalAdd(false))
            dispatch(updateListGuest(res.data.newGust))
            setNameGust('')
            setPhone('')
            setAddress('')
          }
        })
    }
  };

  const handleCancel = () => {
    dispatch(setModalAdd(false))
  };

  return (
    <>
      <Modal width={800} footer={null} title="Thêm khách hàng" visible={modalAdd} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            className='font-weight-bold'
            label="Tên khách hàng"
            name="nameGust"
            rules={[{ required: true, message: 'Vui lòng nhập tên khách hàng!' }]}
            hasFeedback
          >
            <Input value={nameGust} onChange={e => setNameGust(e.target.value)} />
          </Form.Item>

          <Form.Item
            className='font-weight-bold'
            label="Số điện thoại"
            name="phone"
          >
            <Input type='number' value={phone} onChange={e => setPhone(e.target.value)} />
          </Form.Item>
          <Form.Item
            className='font-weight-bold'
            label="Địa chỉ"
            name="address"
          >
            <Input value={address} onChange={e => setAddress(e.target.value)} />
          </Form.Item>
          <Space size="middle" className='d-flex' style={{ flexDirection: 'row-reverse' }}>
            <Button onClick={() => handleCancel()} className='font-weight-bold' style={{ padding: '0 32px' }} icon={<StopOutlined />} >Hủy</Button>
            <Button onClick={() => handleSubmit()} className='font-weight-bold' style={{ background: '#4bac4d', border: 'none', padding: '0 32px' }} htmlType="submit" type="primary" icon={<SaveOutlined />}>
            Lưu
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
};

export default GuestModal;
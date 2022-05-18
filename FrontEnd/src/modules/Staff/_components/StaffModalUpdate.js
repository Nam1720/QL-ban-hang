import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Space } from 'antd';
import { SaveOutlined, StopOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setModalUpdate } from '../_store/staffSlice';

const StaffModalUpdate = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const modalUpdate = useSelector(state => state.staff.modalUpdate)
  
  useEffect(() => {
    const { codeStaff, nameStaff, phoneStaff, username, password } = modalUpdate
    form.setFieldsValue({ codeStaff, nameStaff, phoneStaff, username, password })
  }, [modalUpdate])

  const handleSubmit = () => {
  };

  const handleCancel = () => {
    dispatch(setModalUpdate({ ...modalUpdate, view: false }))
  };

  return (
    <>
      <Modal width={800} footer={null} title="Cập nhật thông tin nhân viên" visible={modalUpdate.view} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            className='font-weight-bold'
            label="Mã nhân viên"
            name="codeStaff"
            rules={[{ required: true, message: 'Vui lòng nhập tên nhân viên!' }]}
            hasFeedback
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            className='font-weight-bold'
            label="Tên nhân viên"
            name="nameStaff"
            rules={[{ required: true, message: 'Vui lòng nhập tên nhân viên!' }]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <Form.Item
            className='font-weight-bold'
            label="Số điện thoại"
            name="phoneStaff"
            hasFeedback
          >
            <Input type='number' />
          </Form.Item>
          <Form.Item
            className='font-weight-bold'
            label="Tài khoản"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
            hasFeedback
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            className='font-weight-bold'
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            hasFeedback
          >
            <Input.Password />
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

export default StaffModalUpdate;
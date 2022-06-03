import React, { useState } from 'react';
import { Drawer, Button, Col, Row, Input, Select, Space, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addGuest } from '../../_api';
import { openNotificationWithIcon } from '../../../../helpers/funcs';
import { addListGust } from '../../../Guest/_store/guestSlice';
const { Option } = Select;

const SellDrawer = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [nameGust, setNameGust] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const onFinish = async () => {
    const values = await form.validateFields();

    addGuest({ ...values }).then((res) => {
      if (res.data.success) {
        openNotificationWithIcon('success', res.data.message);
        dispatch(addListGust([...addListGust, res.data.newGust]));
      } else {
        openNotificationWithIcon('error', res.data.message);
      }
    });
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        style={{ borderRadius: '8px', marginLeft: '24px' }}
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Thêm mới
      </Button>
      <Drawer
        title="Thêm khách hàng mới"
        width={610}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Hủy</Button>
            <Button onClick={() => onFinish()} type="primary">
              Thêm
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" onFinish={() => onFinish()} hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input
                  value={nameGust}
                  onChange={(e) => setNameGust(e.target.value)}
                  placeholder="Tên khách hàng"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(
                      /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
                    ),
                    message: 'Số điện thoại chưa đúng định dạng',
                  },
                ]}
              >
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Số điện thoại"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="sex"
                label="Giới tính"
                rules={[
                  {
                    required: true,
                    message: 'Please select an owner',
                  },
                ]}
              >
                <Select placeholder="Giới tính">
                  <Option value="1">Nam</Option>
                  <Option value="2">Nữ</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="adress"
                label="Địa chỉ"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Địa chỉ"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Ghi chú"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Ghi chú" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default SellDrawer;

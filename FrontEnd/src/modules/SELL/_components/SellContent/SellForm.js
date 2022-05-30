import { DeleteOutlined, SaveOutlined, StopOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Space } from 'antd';
import React from 'react';

const SellForm = () => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Col>
          <Form.Item
            name="productName"
            label="Tên sản phẩm"
            rules={[{ required: true, message: 'Tên sản phẩm bắt buộc' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="priceCapital"
            label="Giá nhập"
            rules={[{ required: true, message: 'Giá nhập bắt buộc' }]}
          >
            <InputNumber
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
            />
          </Form.Item>
          <Form.Item
            name="priceSell"
            label="Giá bán"
            rules={[{ required: true, message: 'Giá bán bắt buộc' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="inventory"
            label="Số lượng"
            rules={[{ required: true, message: 'Số lượng sản phẩm bắt buộc' }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>

        <Form.Item {...tailLayout}>
          <Space
            size="middle"
            className="d-flex"
            style={{ flexDirection: 'row-reverse' }}
          >
            <Button
              onClick={() => handelcancel()}
              className="font-weight-bold"
              style={{ padding: '0 32px' }}
              icon={<StopOutlined />}
            >
              Hủy
            </Button>

            <Button
              htmlType="button"
              onClick={onReset}
              icon={<DeleteOutlined />}
            >
              Reset
            </Button>
            <Button
              className="font-weight-bold"
              style={{
                background: '#4bac4d',
                border: 'none',
                padding: '0 32px',
              }}
              htmlType="submit"
              type="primary"
              icon={<SaveOutlined />}
            >
              Thêm
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Button className="btn-check-out" type="primary">
        Thanh toán
      </Button>
    </>
  );
};

export default SellForm;

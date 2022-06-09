import React, { useState } from 'react';
import { Drawer, Button, Input, Space, Form, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addGuest } from '../../_api';
import { openNotificationWithIcon } from '../../../../helpers/funcs';
import { addListGust } from '../../../Guest/_store/guestSlice';

const SellDrawerOrder = () => {
  const [visible, setVisible] = useState(false);
  const customer = useSelector((state) => state.sell.customer);
  console.log('================dfsfs=========', customer.text);

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  //   const [price, setPrice] = useState('');

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
        className="btn-order"
        style={{ borderRadius: '8px', marginLeft: '24px' }}
        type="primary"
        onClick={showDrawer}
      >
        Đặt hàng
      </Button>
      <Drawer
        title={customer}
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form layout="vertical" onFinish={() => onFinish()} hideRequiredMark>
          <h2>Khách lẻ</h2>

          <div className="d-flex-center1 justify-content-between">
            <span className="">Tổng tiền hàng: </span>
            <span className="font-size-18">200,000 VND </span>
          </div>
          <div className="d-flex-center1 justify-content-between">
            <span className=" ">Khách cần trả: </span>
            <span className="font-size-18">200,000 VND </span>
          </div>
          <div className="d-flex-center1 justify-content-between">
            <span className=" ">Khách thanh toán: </span>
            <Input className="text-right inp-order font-24 primary-color" />
          </div>
          <Divider />
          <div className="d-flex-center1 justify-content-between">
            <span className=" ">Tiền thừa trả lại khách: </span>
            <span className="font-24">200,000 VND </span>
          </div>
          <Space>
            <Button
              className="font-24 btn-order"
              onClick={() => onFinish()}
              type="primary"
            >
              Thanh toán
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};

export default SellDrawerOrder;

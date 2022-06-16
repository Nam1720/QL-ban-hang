import React, { useEffect, useState } from 'react';
import { Drawer, Button, Input, Space, Form, Divider } from 'antd';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../../../helpers/funcs';

const SellDrawerOrder = () => {
  const [visible, setVisible] = useState(false);
  const [sum, setSum] = useState(0);
  const customer = useSelector((state) => state.sell.customer);
  const productsBuying = useSelector((state) => state.sell.productsBuying);
  const [priceRefunds, setPriceRefunds] = useState();

  //get productByIng
  console.log('customer', customer);
  console.log('productsBuying', productsBuying);

  // sum
  useEffect(() => {
    let initSum = 0;
    if (productsBuying.length != 0) {
      productsBuying.map((value) => {
        initSum = initSum + value.amout * value.priceSell;
        setSum(initSum);
      });
    } else {
      setSum(initSum);
    }
  }, [productsBuying]);

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
        title="Hóa đơn"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form layout="vertical" hideRequiredMark>
          <h2>Khách lẻ</h2>

          <div className="d-flex-center1 justify-content-between">
            <span className="">Tổng tiền hàng: </span>
            <span className="font-size-18">{formatPrice(sum)} VND</span>
          </div>
          <div className="d-flex-center1 justify-content-between">
            <span className=" ">Khách cần trả: </span>
            <span className="font-size-18 color-sum-price">
              {formatPrice(sum)} VND
            </span>
          </div>
          <div className="d-flex-center1 inp-order justify-content-between">
            <span className=" ">Khách thanh toán: </span>
            <Input
              className="text-right  font-24 primary-color"
              type="number"
              onChange={(e) => setPriceRefunds(e.target.value)}
            />
          </div>
          <Divider />
          <div className="d-flex-center1 justify-content-between">
            <span className=" ">Tiền thừa trả lại khách: </span>
            <span className="font-24">
              {!priceRefunds ? 0 : formatPrice(sum - priceRefunds)} VND
            </span>
          </div>
          <Space>
            <Button className="font-24 btn-order" type="primary">
              Thanh toán
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};

export default SellDrawerOrder;

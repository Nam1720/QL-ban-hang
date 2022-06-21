import React, { useEffect, useRef, useState } from 'react';
import { Drawer, Button, Input, Space, Form, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  formatPrice,
  openNotificationWithIcon,
} from '../../../../helpers/funcs';
import { createInvoice, findCustomer } from '../../_api';
import { useReactToPrint } from 'react-to-print';
import './SellPrint.scss';
import { setProductsBuying } from '../../_store/sellSlice';

const SellDrawerOrder = () => {
  const [visible, setVisible] = useState(false);
  const [sum, setSum] = useState(0);
  const [newCustomer, setNewCustomer] = useState('');
  const customer = useSelector((state) => state.sell.customer);
  const productsBuying = useSelector((state) => state.sell.productsBuying);
  const [priceRefunds, setPriceRefunds] = useState();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const getTime = () => {
    const date = new Date().toString();
    return date;
  };
  const dispatch = useDispatch();

  let { nameGust, addressGust, phoneGust } = newCustomer;

  const debounceRef = useRef();
  const handleChangeInput = (value) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      if (customer !== '') {
        findCustomer(value)
          .then((res) => {
            if (res.data.success) {
              setNewCustomer(res.data.guest);
            } else {
              openNotificationWithIcon('error', res.data.message);
            }
          })
          .catch(() => {
            openNotificationWithIcon(
              'error',
              'Có lỗi xảy ra, xin vui lòng thử lại!'
            );
          });
      }
    }, 600);
  };
  useEffect(() => {
    handleChangeInput(customer);
  }, [customer]);

  // get sum
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
    // checkProductBuyIng();
  }, [productsBuying]);

  // call api incoice

  const onSubmit = () => {
    if (!priceRefunds) {
      return alert('Nhập số tiền khách hàng trả!');
    } else {
      createInvoice({
        nameGuest: nameGust,
        addressGuest: addressGust,
        phoneGuest: phoneGust,
        productsBuying: productsBuying,
        totalMoney: sum,
      }).then((res) => {
        if (res.data.success) {
          openNotificationWithIcon('success', res.data.message);
          handlePrint();
          dispatch(setProductsBuying([]));
          onClose();
        } else {
          openNotificationWithIcon('error', res.data.message);
        }
      });
    }
  };

  // event
  const showDrawer = () => {
    if (productsBuying.length == 0 || customer == '') {
      return openNotificationWithIcon('error', 'Chọn sản phẩm hoặc khách hàng');
    } else {
      return setVisible(true);
    }
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
        title="Hóa đơn thanh toán"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form layout="vertical" hideRequiredMark>
          <div className="d-flex-center1 justify-content-between">
            <h2 className="">Khách hàng: </h2>
            <h2>{nameGust}</h2>
          </div>

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
              rules={[{ required: true, message: 'Tên sản phẩm bắt buộc' }]}
            />
          </div>
          <Divider />
          <div className="d-flex-center1 justify-content-between">
            <span className=" ">Tiền thừa trả lại khách: </span>
            <span className="font-24">
              {!priceRefunds ? 0 : formatPrice(priceRefunds - sum)} VND
            </span>
          </div>
          <Space>
            <Button
              className="font-24 btn-order"
              type="primary"
              onClick={onSubmit}
            >
              Thanh toán
            </Button>
          </Space>
        </Form>
      </Drawer>
      {/* <SellPrint className="SellPrint" ref={componentRef} /> */}
      <div className="SellPrint" ref={componentRef}>
        <table className="body-wrap">
          <tbody>
            <tr>
              <td></td>
              <td className="container" width="600">
                <div className="content">
                  <table
                    className="main"
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <tbody>
                      <tr>
                        <td className="content-wrap aligncenter">
                          <table width="100%" cellPadding="0" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td className="content-block">
                                  <h2>Cảm ơn quý khách</h2>
                                </td>
                              </tr>
                              <tr>
                                <td className="content-block">
                                  <table className="invoice">
                                    <tbody>
                                      <tr>
                                        <td>
                                          {nameGust}
                                          <br />
                                          {phoneGust}
                                          <br />
                                          {addressGust}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <table
                                            className="invoice-items"
                                            cellPadding="0"
                                            cellSpacing="0"
                                          >
                                            <tbody>
                                              {productsBuying.map(
                                                (value, index) => {
                                                  return (
                                                    <tr key={index}>
                                                      <td>
                                                        {value.productName}
                                                      </td>
                                                      <td className="alignright">
                                                        {formatPrice(
                                                          value.priceSell *
                                                            value.amout
                                                        )}
                                                      </td>
                                                    </tr>
                                                  );
                                                }
                                              )}
                                              <tr className="total">
                                                <td
                                                  className="alignright"
                                                  width="80%"
                                                >
                                                  Tổng tiền
                                                </td>
                                                <td className="alignright">
                                                  {formatPrice(sum)}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td className="content-block">{getTime()}</td>
                              </tr>
                              <tr>
                                {/* <td className="content-block">
                              Company Inc. 123 Van Ness, San Francisco 94102
                          </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="footer">
                    {/* <table width="100%">
                    <tbody><tr>
                      <td className="aligncenter content-block">Questions? Email <a href="mailto:">support@company.inc</a></td>
                    </tr>
                    </tbody></table> */}
                  </div>
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SellDrawerOrder;

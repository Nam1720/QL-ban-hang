import { EditOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import SellFilter from './SellFilter';
import SellForm from './SellForm';

const SellContent = () => {
  return (
    <div className="display-flex content">
      <div className="content__left">
        <div className="content__left__list">ádsadas</div>
        <div className="content__left__sum d-flex-center justify-content-between">
          <Input
            prefix={<EditOutlined />}
            style={{ width: 300 }}
            placeholder="Ghi chú đơn hàng"
          />
          <span className="font-weight-bold ">
            Tổng tiền hàng:{' '}
            <span className="content__left__sum__price">2.000.000 VND</span>
          </span>
        </div>
      </div>
      <div className="content__right">
        <div className="content__right__fillter">
          <SellFilter />
          <SellForm />
        </div>
      </div>
    </div>
  );
};

export default SellContent;

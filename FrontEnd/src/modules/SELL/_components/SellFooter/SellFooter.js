import { PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const SellFooter = () => {
  return (
    <div className="sell-footer display-flex">
      <Button
        href="tel:0379003693"
        type="primary"
        shape="round"
        icon={<PhoneOutlined />}
      >
        Hỗ trợ: 0379003693
      </Button>
      <Button
        href="tel:0379003693"
        type="primary"
        shape="round"
        icon={<PhoneOutlined />}
      >
        Tư vấn mua hàng
      </Button>
    </div>
  );
};

export default SellFooter;

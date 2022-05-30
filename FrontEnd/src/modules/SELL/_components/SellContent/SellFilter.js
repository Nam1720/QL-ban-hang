import { Dropdown, Input, Menu, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

const SellFilter = () => {
  const menuUser = (
    <Menu>
      <Menu.Item key="Vietnamese">Đăng xuất</Menu.Item>
    </Menu>
  );
  return (
    <div className="d-flex  justify-content-between ">
      <Dropdown
        overlay={menuUser}
        trigger={['click']}
        onClick={(e) => e.preventDefault()}
      >
        <div className="cusor-pointer d-flex align-items-center">
          <i className="icon-user-circle-o pr-1"></i>
          <Text strong>
            {/* {authInfo && !isEmpty(authInfo) ? authInfo : 'Update'} */}
            Phạm Văn Nam
          </Text>
        </div>
      </Dropdown>
      <Input style={{ width: 300 }} placeholder="Tìm kiếm..." />
    </div>
  );
};

export default SellFilter;

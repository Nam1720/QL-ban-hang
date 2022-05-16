/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Input, Space } from 'antd';
import {
  PlusOutlined,
  CaretDownOutlined,
  ExportOutlined,
  MoreOutlined,
} from '@ant-design/icons';

import { Button } from 'antd';

const { Search } = Input;

const onSearch = (value) => console.log(value);

const Filter = () => {
  return (
    <div>
      <Space
        direction="
    Horizontal"
      >
        <Search
          style={{ width: 300 }}
          placeholder="Tìm kiếm..."
          onSearch={onSearch}
          enterButton
        />
        <Button type="primary" icon={<MoreOutlined />}>
          Thao tác <CaretDownOutlined />
        </Button>

        <Button type="primary" icon={<PlusOutlined />}>
          Thêm mới <CaretDownOutlined />
        </Button>

        <Button type="primary" icon={<ExportOutlined />}>
          Xuất file
        </Button>
      </Space>
    </div>
  );
};

export default Filter;

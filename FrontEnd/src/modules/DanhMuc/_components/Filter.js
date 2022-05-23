/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Button, Input, Space } from 'antd';
import {
  PlusOutlined,
  CaretDownOutlined,
  ExportOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setModalAdd } from '../_store/categorySlice';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setmodalAdd } from '../_store/categorySlice';
const { Search } = Input;

const onSearch = (value) => console.log(value);
const Filter = () => {
  const dispatch = useDispatch();
  const handleClickAdd = () => {
    dispatch(
      setmodalAdd({
        view: true,
      })
    );
  };

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

        <Button
          onClick={() => handleClickAdd()}
          className="font-weight-bold "
          type="primary"
          icon={<PlusOutlined />}
          style={{ borderRadius: '8px' }}
        >
          Thêm mới
        </Button>
      </Space>
    </div>
  );
};

export default Filter;

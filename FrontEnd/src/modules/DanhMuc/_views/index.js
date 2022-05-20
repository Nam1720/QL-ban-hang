import { Divider } from 'antd';
import React from 'react';
import Filter from '../_components/Filter';
import CategoryModalAdd from '../_components/ModalAdd';
import TableData from '../_components/TableData';
import '../_styles/style.scss';

const DanhMuc = () => {
  return (
    <div className="panel p-16">
      <Filter />
      <Divider />
      <TableData />
      <CategoryModalAdd />
    </div>
  );
};

export default DanhMuc;

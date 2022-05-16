import { Divider } from 'antd';
import React from 'react';
import Filter from '../_components/Filter';
import TableData from '../_components/TableData';
import '../_styles/style.scss';

const DanhMuc = () => {
  return (
    <div>
      <Filter />
      <Divider />
      <TableData />
    </div>
  );
};

export default DanhMuc;

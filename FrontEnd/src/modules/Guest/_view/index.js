import React from 'react';
import '../_style/style.scss';
import GuestFillter from '../_components/GuestFillter';
import GuestTable from '../_components/GuestTable';
import GuestModalAdd from '../_components/GuestModalAdd';
import GuestModalUpdate from '../_components/GuestModalUpdate';
import GuestModalRemove from '../_components/GustModalRemove';

const DanhMuc = () => {
  return (
    <div>
      <GuestFillter />
      <GuestTable />
      <GuestModalAdd />
      <GuestModalUpdate />
      <GuestModalRemove />
    </div>
  );
};

export default DanhMuc;

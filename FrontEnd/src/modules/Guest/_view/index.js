import React from 'react';
import '../_style/style.scss';
import GuestFillter from '../_components/GuestFillter';
import GuestTable from '../_components/GuestTable';
import GuestModal from '../_components/GuestModal';

const DanhMuc = () => {
  return (
    <div>
      <GuestFillter />
      <GuestTable />
      <GuestModal />
    </div>
  );
};

export default DanhMuc;

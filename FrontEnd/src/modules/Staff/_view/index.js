import React from 'react';
import '../_style/style.scss';
import StaffFillter from '../_components/StaffFillter';
import StaffTable from '../_components/StaffTable';
import StaffModalAdd from '../_components/StaffModalAdd';
import StaffModalUpdate from '../_components/StaffModalUpdate';
import StaffModalRemove from '../_components/StaffModalRemove';


const DanhMuc = () => {
  return (
    <div>
      <StaffFillter />
      <StaffTable />
      <StaffModalAdd />
      <StaffModalUpdate />
      <StaffModalRemove />
    </div>
  );
};

export default DanhMuc;

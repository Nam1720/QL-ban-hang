import React from 'react';
import '../_style/style.scss';
import InvoiceFillter from '../_components/InvoiceFillter';
import InvoiceTable from '../_components/InvoiceTable';
import InvoiceModalInfo from '../_components/InvoiceInfo';
import InvoiceModalRemove from '../_components/InvoiceModalRemove';


const Invoice = () => {
  return (
    <div>
      <InvoiceFillter />
      <InvoiceTable />
      <InvoiceModalInfo />
      <InvoiceModalRemove />
    </div>
  );
};

export default Invoice;

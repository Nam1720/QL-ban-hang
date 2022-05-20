import React from 'react';
// import PermissionData from './middleware/PermissionData'
import * as AUTH from 'auth/_store/constants'
const Dashboard = React.lazy(() => import('dashboard/_views'));
const DanhMuc = React.lazy(() => import('../src/modules/DanhMuc/_views'));
const Guest = React.lazy(() => import('../src/modules/Guest/_view'))
const Staff = React.lazy(() => import('../src/modules/Staff/_view'))
const Invoice = React.lazy(() => import('../src/modules/Invoice/_view'))

const routes = [
  { path: '/', exact: true, name: AUTH.MODULE_DASHBOARD , component: Dashboard },
  { path: '/danh-muc', exact: true, name: AUTH.MODULE_DASHBOARD , component: DanhMuc },
  { path: '/khach-hang', exact: true, name: AUTH.MODULE_DASHBOARD , component: Guest },  
  { path: '/nhan-vien', exact: true, name: AUTH.MODULE_DASHBOARD , component: Staff },
  { path: '/hoa-don', exact: true, name: AUTH.MODULE_DASHBOARD , component: Invoice },
]

export default routes;

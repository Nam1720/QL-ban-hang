import React from 'react';
// import PermissionData from './middleware/PermissionData'
import * as AUTH from 'auth/_store/constants'
const Dashboard = React.lazy(() => import('dashboard/_views'));
const DanhMuc = React.lazy(() => import('../src/modules/DanhMuc/_views'));

const routes = [
  { path: '/', exact: true, name: AUTH.MODULE_DASHBOARD , component: Dashboard },
  { path: '/danh-muc', exact: true, name: AUTH.MODULE_DASHBOARD , component: DanhMuc }, 
  
]

export default routes;

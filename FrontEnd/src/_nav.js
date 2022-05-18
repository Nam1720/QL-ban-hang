export default {
  items: [
    {
      name: 'Tổng quan',
      url: '/',
      icon: 'icon-home',
      children: []
    },
    {
      name: 'Hàng Hóa',
      url: '/hang-hoa',
      icon: 'icon-home',
      children: [
        {
          name: 'Danh Mục',
          url: '/danh-muc',
          icon: 'icon-home',
          children: []
        },
        {
          name: 'Thiết lập giá',
          url: '/hang-hoa/thiet-lap-gia',
          icon: 'icon-home',
          children: []
        },
      ]
    },
    {
      name: 'Khách hàng',
      url: '/khach-hang',
      icon: 'icon-home',
      children: []
    },
    {
      name: 'Hóa Đơn',
      url: '/hoa-don',
      icon: 'icon-home',
      children: []
    },
    {
      name: 'Nhân Viên',
      url: '/nhan-vien',
      icon: 'icon-home',
      children: []
    },
  ],
};

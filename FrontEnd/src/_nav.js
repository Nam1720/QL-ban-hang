export default {
  items: [
    {
      name: 'Tổng quan',
      url: '/',
      icon: 'icon-home',
      children: [],
    },
    {
      name: 'Hàng Hóa',
      url: '/hang-hoa',
      icon: 'icon-cart',
      children: [
        {
          name: 'Sản phẩm',
          url: '/san-pham',
          icon: 'icon-menu',
          children: [],
        },
        {
          name: 'Thiết lập giá',
          url: '/thiet-lap-gia',
          icon: 'icon-coin-dollar',
          children: [],
        },
      ],
    },
    {
      name: 'Hóa Đơn',
      url: '/hoa-don',
      icon: 'icon-file-text2',
      children: [],
    },
    {
      name: 'Khách hàng',
      url: '/khach-hang',
      icon: 'icon-users',
      children: [],
    },
    {
      name: 'Nhân Viên',
      url: '/nhan-vien',
      icon: 'icon-user-check',
      children: [],
    },
  ],
};

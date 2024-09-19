const PATH_ROUTERS_CLIENT = {
  HOMEPAGE: '/',
  PRODUCT_SEARCH: 'product/search/',
  PRODUCT_DETAILS: 'product/:slug',
  CATEGORIES_DETAILS: 'danh-muc/:id',
  PHARMACY_DETAILS: 'nha-thuoc/:id',
  BLOG_DETAILS: 'bai-viet/:id',
  CART: 'gio-hang'
};

const PATH_ROUTERS_ADMIN = {
  DASHBOARD: 'admin/dashboard',
  ADD_PRODUCT: 'admin/add-product',
  ALL_PRODUCT: 'admin/all-product',
  DETAILS_PRODUCT: 'admin/product-details/:slug',
  ADD_CATEGORY: 'admin/add-category',
  ALL_CATEGORY: 'admin/all-category',
  ORDERS: 'admin/orders',
  CATEGORY: 'admin/category',
  CUSTOMERS: 'admin/customers', // sử dụng cho update user
  SETTINGS: 'admin/settings'
};

export { PATH_ROUTERS_CLIENT, PATH_ROUTERS_ADMIN };

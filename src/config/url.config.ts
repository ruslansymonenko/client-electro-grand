export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
  root: (url = '') => `${url ? url : ''}`,

  main: () => PUBLIC_URL.root('/'),
  registration: () => PUBLIC_URL.root('/auth/registration'),
  login: () => PUBLIC_URL.root('/auth/login'),

  categories: () => PUBLIC_URL.root('/categories'),
  category: (slug: string) => PUBLIC_URL.root(`/category/${slug}`),
  subcategories: () => PUBLIC_URL.root('/subcategories'),
  subcategory: (slug: string) => PUBLIC_URL.root(`/subcategory/${slug}`),
  products: () => PUBLIC_URL.root(`/products`),
  product: (slug: string) => PUBLIC_URL.root(`/product/${slug}`),
  brands: () => PUBLIC_URL.root('/brands'),
  brand: () => PUBLIC_URL.root('/brand'),
  brandProducts: (slug: string) => PUBLIC_URL.root(`/brand-products/${slug}`),
  cart: () => PUBLIC_URL.root('/cart'),
  checkout: () => PUBLIC_URL.root('/checkout'),

  features: () => PUBLIC_URL.root('/features'),
  terms: () => PUBLIC_URL.root('/terms'),
  about: () => PUBLIC_URL.root('/about'),
  contact: () => PUBLIC_URL.root('/contact'),
};

export const PRIVATE_URL = {
  root: (url: string = '') => `${APP_URL}${url ? url : ''}`,

  dashboard: () => PUBLIC_URL.root(`/user`),
  orders: () => PUBLIC_URL.root(`/user/orders`),
  cart: (id: number) => PUBLIC_URL.root(`/user/cart/${id}`),
  order: (id: number) => PUBLIC_URL.root(`/user/order/${id}`),
  profile: () => PUBLIC_URL.root(`/user/profile`),
};

export const ADMIN_URL = {
  root: (url = '') => `${APP_URL}${url ? url : ''}`,

  dashboard: () => PUBLIC_URL.root(`/dashboard`),
  orders: () => PUBLIC_URL.root(`/dashboard/orders`),
  order: (id: number) => PUBLIC_URL.root(`/dashboard/order/${id}`),

  products: () => PUBLIC_URL.root(`/dashboard/products`),
  product: (id: number) => PUBLIC_URL.root(`/dashboard/products/${id}`),
  categories: () => PUBLIC_URL.root('/categories'),
  category: (id: number) => PUBLIC_URL.root(`/category/${id}`),
  subcategories: () => PUBLIC_URL.root('/subcategories'),
  subcategory: (id: number) => PUBLIC_URL.root(`/subcategory/${id}`),
};

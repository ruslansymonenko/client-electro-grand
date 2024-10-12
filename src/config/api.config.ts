export const SERVER_URL = process.env.SERVER_URL as string;
export const SERVER_API = `${SERVER_URL}/api`;

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,

  auth: (url = '') => API_URL.root(`/auth${url}`),

  brand: (url = '') => API_URL.root(`/brand${url}`),
  category: (url = '') => API_URL.root(`/category${url}`),
  subcategory: (url = '') => API_URL.root(`/subcategory${url}`),
  product: (url = '') => API_URL.root(`/product${url}`),

  order: (url = '') => API_URL.root(`/order${url}`),
  payment: (url = '') => API_URL.root(`/payment${url}`),
};

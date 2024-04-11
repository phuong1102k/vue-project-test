import axiosAPI from ".";

// export const addNewCustomerCartAPI = (userId, product) => {
//   return axiosAPI.post(`/carts?userId=${userId}`, product);
// };

export const addNewCartAPI = (product) => {
  return axiosAPI.post(`/carts`, product);
};

export const updateCartAPI = (cartId, product) => {
  return axiosAPI.put(`/carts/${cartId}`, product);
};

export const getCartListAPI = (userId) => {
  return axiosAPI.get(`/carts?userId=${userId}`);
};

// export const getCartListAPI = () => {
//   return axiosAPI.get(`/carts`);
// };

// export const addCartAPI = (cartId) => {
//   return axiosAPI.put(`/carts/${cartId}`);
// };

// export const subtractCartAPI = (cartId) => {
//   return axiosAPI.put(`/carts/${cartId}`);
// };

// export const deleteCartAPI = (cartId) => {
//   return axiosAPI.put(`/carts/${cartId}`);
// };

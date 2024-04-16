import axiosAPI from ".";

export const addNewCartAPI = (product) => {
  return axiosAPI.post(`/carts`, product);
};

export const updateCartAPI = (cartId, product) => {
  return axiosAPI.put(`/carts/${cartId}`, product);
};

export const getCartListAPI = (userId) => {
  return axiosAPI.get(`/carts?userId=${userId}`);
};

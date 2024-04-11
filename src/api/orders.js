import axiosAPI from ".";

export const orderAPI = (order) => {
  return axiosAPI.post("/orders", order);
};

export const getOrderListAPI = (userId) => {
  return axiosAPI.get(`/orders?userId=${userId}`);
};

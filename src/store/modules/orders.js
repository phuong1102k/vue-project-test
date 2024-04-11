import { orderAPI, getOrderListAPI } from "@/api/orders";

const state = () => {
  return {
    order: {},
    orderList: [],
  };
};

const mutations = {
  setOrderMutation(state, payload) {
    state.order = payload;
  },

  setOrderListMutation(state, payload) {
    state.orderList = payload;
  },
};

const actions = {
  async orderAction(context, { data, router }) {
    const order = await orderAPI(data);
    router.push("/pay-complete");
    context.commit("setOrderMutation", order);
  },

  async getOrderListAction(context, payload) {
    const data = await getOrderListAPI(payload);
    context.commit("setOrderListMutation", data);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

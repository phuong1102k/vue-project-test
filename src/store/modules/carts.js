import {
  updateCartAPI,
  addNewCartAPI,
  getCartListAPI,
  // addCartAPI,
  // subtractCartAPI,
  // deleteCartAPI,
} from "@/api/carts";

const state = () => {
  return {
    cartList: {},
  };
};
const mutations = {
  setCartListMutation(state, payload) {
    state.cartList = payload;
  },
  setAddNewCartMutation(state, payload) {
    state.cartList = [payload];
  },

  setUpdateCartMutation(state, payload) {
    state.cartList = [payload];
  },
  // setAddCartMutation(state, payload) {
  //   state.cartList = payload;
  // },
  // setSubtractCartMutation(state, payload) {
  //   state.cartList = payload;
  // },
  // setDeleteCartMutation(state, payload) {
  //   state.cartList = payload;
  // },
};

const actions = {
  //để call api
  // async newCartForCustomer(context, payload) {
  //   const data = await getCartListAPI(payload);
  //   context.commit("setCartListMutation", data);
  // },

  async getCartListAction(context, payload) {
    const data = await getCartListAPI(payload);
    context.commit("setCartListMutation", data);
  },

  async addNewCartAction(context, payload) {
    const data = await addNewCartAPI(payload);

    context.commit("setAddNewCartMutation", data);
  },

  async updateCartAction(context, { cartId, payload }) {
    const data = await updateCartAPI(cartId, payload);
    context.commit("setUpdateCartMutation", data);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

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
    // console.log(payload);
    // console.log(cartId);
    context.commit("setUpdateCartMutation", data);
  },

  // async addCartAction(context, payload) {
  //   const data = await addCartAPI(payload);
  //   context.commit("setAddCartMutation", data);
  // },

  // async subtractCartAction(context, payload) {
  //   const data = await subtractCartAPI(payload);
  //   context.commit("setSubtractCartMutation", data);
  // },

  // async deleteCartAction(context, payload) {
  //   const data = await deleteCartAPI(payload);
  //   context.commit("setDeleteCartMutation", data);
  // },

  // loadUserLoginFromLocalStorageAction({ commit }) {
  //   let userLogin = {};
  //   if (localStorage.getItem("userLogin")) {
  //     userLogin = JSON.parse(localStorage.getItem("userLogin"));
  //   }
  //   commit("setUserLoginFromLocalStorage", userLogin);
  // },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

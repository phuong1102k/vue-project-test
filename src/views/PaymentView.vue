<template>
  <main>
    <BenifitBar></BenifitBar>

    <div class="payment">
      <div class="wrapper">
        <div class="head-title">
          <div class="logo">
            <img src="/images/logo/Themea_Logo-Brand_Black.svg" alt="logo" />
          </div>
          <span>Payment</span>
        </div>
        <form class="payment-detail" @submit.prevent="orderHandle">
          <div class="address">
            <table>
              <tr>
                <td><label for="orderer-name">Name:</label></td>
                <td>
                  <input
                    type="text"
                    id="orderer-name"
                    v-model="orderInfomation.name"
                  />
                </td>
              </tr>
              <tr>
                <td><label for="orderer-phone">Phone Number:</label></td>
                <td>
                  <input
                    type="tel"
                    id="orderer-phone"
                    v-model="orderInfomation.phone"
                  />
                </td>
              </tr>
              <tr>
                <td><label for="orderer-address">Address:</label></td>
                <td>
                  <input
                    type="text"
                    id="orderer-address"
                    v-model="orderInfomation.address"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div class="product">
            <table class="pc">
              <thead>
                <tr>
                  <th>Product</th>
                  <td>Unit Price</td>
                  <td>Amount</td>
                  <td>Item Subtotal</td>
                </tr>
              </thead>
              <tbody v-for="(cart, idx) in cartListDetail" :key="idx">
                <tr>
                  <td class="item">
                    <div class="image-cover">
                      <img :src="cart.image" alt="" />
                    </div>
                    <p>{{ cart.name }}</p>
                  </td>

                  <td>
                    ${{ cart.salePrice }}
                    <span style="text-decoration: line-through"
                      >${{ cart.originalPrice }}</span
                    >
                  </td>
                  <td class="unit">
                    <div>{{ cart.quantity }}</div>
                    <div class="quantity-picker">
                      <div class="quantity">
                        <div
                          class="input-quantity"
                          style="justify-content: center; display: flex"
                        >
                          <button
                            aria-label="Decrease"
                            class="math-sign"
                            @click="subtractQuantity(cart)"
                          >
                            <i class="fa-solid fa-minus"></i>
                          </button>
                          <span class="num quantity">{{ cart.quantity }}</span>

                          <span aria-live="polite" class="quantity-text"
                            >1</span
                          >

                          <button
                            aria-label="Increase"
                            class="math-sign"
                            @click="addQuantity(cart)"
                          >
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>${{ cart.quantity * cart.salePrice }}</td>
                </tr>
              </tbody>
            </table>

            <table class="mobile">
              <thead>
                <tr>
                  <th>Product</th>

                  <td>Unit Price</td>
                  <td>Quantity</td>
                  <td>Info Money</td>
                </tr>
              </thead>
              <tbody v-for="(cart, idx) in cartListDetail" :key="idx">
                <tr>
                  <td class="item">
                    <div class="image-cover">
                      <img :src="cart.image" alt="" />
                    </div>
                    <p>{{ cart.name }}</p>
                  </td>

                  <td>
                    ${{ cart.salePrice }}
                    <span style="text-decoration: line-through"
                      >${{ cart.originalPrice }}</span
                    >
                  </td>
                  <td class="unit">
                    <div>{{ cart.quantity }}</div>
                    <div class="quantity-picker">
                      <div class="quantity">
                        <div
                          class="input-quantity"
                          style="justify-content: center; display: flex"
                        >
                          <button
                            aria-label="Decrease"
                            class="math-sign"
                            @click="subtractQuantity(cart)"
                          >
                            <i class="fa-solid fa-minus"></i>
                          </button>
                          <span class="num quantity">{{ cart.quantity }}</span>

                          <span aria-live="polite" class="quantity-text"
                            >1</span
                          >

                          <button
                            aria-label="Increase"
                            class="math-sign"
                            @click="addQuantity(cart)"
                          >
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>${{ cart.quantity * cart.salePrice }}</td>
                </tr>
              </tbody>
            </table>

            <div class="grid">
              <div class="message">
                <span>Message for Sellers:</span>

                <input
                  type="text"
                  placeholder="Please leave a message..."
                  v-model="orderInfomation.message"
                />
              </div>

              <div class="right">
                <div class="shipping">
                  <div>Shipping Option</div>
                  <div>
                    <p>Nhanh</p>
                    <p>Get by 5/4 - 6/4</p>
                  </div>

                  <div>${{ shippingFee }}</div>
                </div>
                <div class="co-check">
                  Order is eligible for co-check.
                  <i class="fa-regular fa-circle-question"></i>
                </div>
              </div>
            </div>

            <div class="total">
              Order Total ({{ cartListDetail.length }} item):
              <span>${{ total }}</span>
            </div>
          </div>
          <input type="submit" class="order" value="Place Order" />
        </form>
      </div>
    </div>
  </main>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

import BenifitBar from "@/components/BenifitBar.vue";

export default {
  name: "PaymentView",
  components: {
    BenifitBar,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const userLogin = computed(() => store.state.auth.userLogin);

    const cartList = computed(() => store.state.carts.cartList);

    const cartListDetail = computed(() =>
      cartList.value && cartList.value[0]
        ? cartList.value[0].detail.cartList
        : []
    );

    const orderInfomation = reactive({
      name: userLogin.value.user.name,
      phone: userLogin.value.user.phone,
      address: userLogin.value.user.address,
      message: "",
    });

    // const cartList = computed(() => store.state.carts.cartList);
    // function addQuantity(product) {
    //   for (let i = 0; i < cartListDetail.length; i++) {
    //     if (cartListDetail[i].id == product.id) {
    //       cartListDetail[i].quantity++;
    //     }
    //   }
    // }

    // function subtractQuantity(product) {
    //   for (let i = 0; i < cartListDetail.length; i++) {
    //     if (cartListDetail[i].id == product.id) {
    //       cartListDetail[i].quantity--;

    //       if (cartListDetail[i].quantity == 0) {
    //         cartList.value.splice(i, 1);
    //       }
    //     }
    //   }
    // }

    const total = ref(0);
    const shippingFee = ref(0);
    const totalPrice = () => {
      for (let i = 0; i < cartList.value.length; i++) {
        total.value += cartList.value[i].quantity * cartList.value[i].salePrice;
      }
      if (total.value < 100 && total.value > 0) {
        shippingFee.value = 10;
      } else if (total.value > 100) {
        shippingFee.value = 15;
      }
      total.value = total.value + shippingFee.value;
    };

    totalPrice();

    const orderHandle = () => {
      const data = {
        userId: userLogin.value.user.id,
        name: orderInfomation.name,
        email: userLogin.value.user.email,
        address: orderInfomation.address,
        phone: orderInfomation.phone,
        message: orderInfomation.message,
        cart: {
          cartList,
        },
        // totalPrice:
      };

      store.dispatch("orders/orderAction", { data, router });
    };

    return {
      userLogin,
      cartListDetail,
      orderHandle,
      orderInfomation,
      total,
      shippingFee,

      // addQuantity,
      // subtractQuantity,
    };
  },
};
</script>
<style lang="scss">
.head-title {
  display: block;
  margin: 0;
  .logo {
    width: 15rem;
    height: 2.7rem;
    display: inline-block;
  }

  span {
    display: inline-block;
    font-size: 2.4rem;
    padding-top: var(--pd-item);
    border-left: 1px solid var(--primary-clr);
    padding-left: var(--pd-item);
    margin-left: var(--pd-item);
  }
}
.wrapper {
  margin: 0;
}
.payment-detail {
  width: 100%;
  .address {
    margin-bottom: var(--m-item);
    padding: var(--pd-inline) var(--pd-item);
    background-color: var(--thirdary-clr);
    border-radius: var(--border-radius);

    tr,
    td {
      padding: calc(var(--pd-item) / 2);

      input {
        padding: 8px;
        font-size: 1.6rem;
        min-width: 23rem;
      }
    }

    .default {
      color: var(--btn-clr-primary-hover);
      border: 1px solid var(--btn-clr-primary-hover);
      padding: 8px;
      margin-left: var(--m-item);
    }
  }

  .product {
    width: inherit;

    .item {
      display: flex;
      gap: calc(var(--pd-inline) / 2);
      padding: var(--pd-item);
      align-items: center;

      .image-cover {
        width: 15rem;
        border-radius: var(--border-radius);
        overflow: hidden;
        img {
          aspect-ratio: 1 / 1;
        }
      }
    }

    .display-mobile {
      display: none;
    }
  }
}

table {
  width: inherit;

  tr td:nth-child(2),
  tr td:nth-child(3) {
    text-align: center;
  }

  tr td:last-child {
    text-align: end;
  }
}
th,
td {
  padding: var(--pd-item);
  text-align: left;
}

.order {
  float: right;
  margin-right: var(--pd-inline);
  font-size: 2rem;
  border-radius: var(--border-radius);
  padding: calc(var(--pd-inline) / 2) var(--pd-inline);
  color: var(--secondary-clr) !important;
  background-color: var(--btn-clr-primary-hover);
}

.center {
  text-align: center;
}

.mobile {
  display: none;
}

.grid {
  display: flex;
  width: 100%;

  // &.mobile {
  //   display: none;
  // }
  & > * {
    padding: var(--pd-item);
  }
  .message {
    flex-basis: 40%;

    input {
      padding: 8px;
      font-size: 1.6rem;
      margin-left: 8px;
    }
  }

  .right {
    flex-basis: 60%;
    .shipping {
      display: flex;
      justify-content: space-between;
    }

    .co-check {
      padding: var(--pd-item) 0;
    }
  }
}

.total {
  display: flex;
  justify-content: end;
  padding: var(--pd-item);
  span {
    margin-left: 5px;
  }
}

.math-sign {
  padding-inline: 8px;
}

@media screen and (max-width: 739px) {
  .payment {
    margin: 0;
  }

  .shipping > div:last-child {
    padding-right: 8px;
  }

  .right,
  .message {
    padding-inline: 0;
  }

  .pc {
    display: none;
  }

  .mobile {
    display: block;
  }

  .grid {
    flex-direction: column;
  }

  .address {
    & > p {
      display: none;
    }

    &-mobile {
      display: block !important;
    }

    .default {
      margin-left: 0 !important;
    }
  }

  table {
    th,
    td {
      padding: 8px;
    }

    td.item {
      padding: 0 !important;
      .image-cover {
        width: 6rem !important;
      }
    }
  }

  .total {
    padding: var(--pd-item) 8px;
  }

  .order {
    margin: 0;
  }

  .math-sign {
    padding-inline: 2px;
  }
}
</style>

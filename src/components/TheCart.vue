<template>
  <!-- cart -->
  <div class="cart-pc">
    <router-link to="/payment" class="cart-btn"
      ><i class="fa-solid fa-cart-shopping"></i>
      <span class="count">{{ cartListDetail.length }}</span>
    </router-link>
    <div class="nav-detail">
      <span class="subnav-tip"></span>

      <div class="detail">
        <div class="empty" v-if="cartListDetail.length == 0">
          <div class="image-cover">
            <img
              src="/images/logo/NicePng_money-bag-clipart-png_3077213.png"
              alt="cart-img"
            />
          </div>
          <p>Your cart currently empty</p>
        </div>

        <div v-else>
          <ul class="cart-list">
            <li
              class="cart-item"
              v-for="(cart, idx) in cartListDetail"
              :key="idx"
            >
              <div class="item">
                <div>
                  <div class="image-cover">
                    <img :src="cart.image" alt="product" />
                  </div>
                  <div>
                    <p class="name" style="text-align: left">
                      {{ cart.name }}
                    </p>
                    <p class="price" style="text-align: left">
                      {{ cart.salePrice }}
                      <span>${{ cart.originalPrice }}</span>
                    </p>

                    <div class="quantity-picker">
                      <div class="quantity">
                        <div class="input-quantity">
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
                  </div>
                </div>
              </div>
              <div class="delete-cart-item">
                <button @click="deleteProduct(cart)">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </li>
          </ul>

          <div class="payment">
            <div class="total-price">
              Total {{ cartListDetail.length }} in cart
            </div>
            <router-link class="check-out" to="/payment">Check Out</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a class="cart-mobile">
    <label class="cart-btn" @click.stop="activeCart">
      <i class="fa-solid fa-cart-shopping"></i>
      <span class="count">{{ cartListDetail.length }}</span>
    </label>

    <div class="navbar-cart" :class="{ active: isActive }">
      <div class="empty" v-if="cartListDetail.length == 0">
        <div class="image-cover">
          <img
            src="/images/logo/NicePng_money-bag-clipart-png_3077213.png"
            alt="cart-img"
          />
        </div>
        <p>Your cart currently empty</p>
      </div>

      <div v-else>
        <ul class="cart-list">
          <li
            class="cart-item"
            v-for="(cart, idx) in cartListDetail"
            :key="idx"
          >
            <div class="item">
              <div>
                <div class="image-cover">
                  <img :src="cart.image" alt="product" />
                </div>
                <div>
                  <p class="name" style="text-align: left">
                    {{ cart.name }}
                  </p>
                  <p class="price" style="text-align: left">
                    {{ cart.salePrice }}
                    <span>${{ cart.originalPrice }}</span>
                  </p>

                  <div class="quantity-picker" style="text-align: center">
                    <div class="quantity">
                      <div class="input-quantity">
                        <button
                          aria-label="Decrease"
                          class="math-sign"
                          @click="subtractQuantity(cart)"
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="num quantity">{{
                          cart.quantity ?? "mieo"
                        }}</span>

                        <span aria-live="polite" class="quantity-text">1</span>

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
                </div>
              </div>
            </div>
            <div class="delete-cart-item">
              <button @click="deleteProduct(cart)">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </li>
        </ul>

        <div class="payment">
          <div class="total-price">
            Total {{ cartListDetail.length }} in cart
          </div>
          <router-link class="check-out" to="/payment">Check Out</router-link>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { computed } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    cart: {},
    userInfo: {},
  },

  setup(props) {
    const store = useStore();
    const cartList = computed(() => props.cart);

    const cartListDetail = computed(() =>
      cartList.value && cartList.value[0]
        ? cartList.value[0].detail.cartList
        : []
    );

    function addQuantity(product) {
      for (let i = 0; i < cartListDetail.value.length; i++) {
        if (cartListDetail.value[i].id == product.id) {
          // alert(cartList.value[0].detail.cartList[i].id == product.id);
          cartListDetail.value[i].quantity++;

          const data = {
            userId: props.userInfo.user.id,
            detail: {
              cartList: cartListDetail.value,
            },
          };
          const cartId = props.cart[0].id;
          // store.dispatch("carts/updateCartAction", { cartId, data });
          store.dispatch("carts/updateCartAction", { cartId, payload: data });
        }
      }
    }

    function subtractQuantity(product) {
      for (let i = 0; i < cartListDetail.value.length; i++) {
        if (cartListDetail.value[i].id == product.id) {
          cartListDetail.value[i].quantity--;

          const data = {
            userId: props.userInfo.user.id,
            detail: {
              cartList: cartListDetail.value,
            },
          };
          const cartId = props.cart[0].id;

          store.dispatch("carts/updateCartAction", { cartId, payload: data });

          if (cartListDetail.value[i].quantity == 0) {
            cartListDetail.value.splice(i, 1);

            const data = {
              userId: props.userInfo.user.id,
              detail: {
                cartList: cartListDetail.value,
              },
            };
            const cartId = props.cart[0].id;

            store.dispatch("carts/updateCartAction", { cartId, payload: data });
          }
        }
      }
    }

    function deleteProduct(product) {
      for (let i = 0; i < cartListDetail.value.length; i++) {
        if (cartListDetail.value[i].id == product.id) {
          cartListDetail.value.splice(i, 1);

          const data = {
            userId: props.userInfo.user.id,
            detail: {
              cartList: cartListDetail.value,
            },
          };
          const cartId = props.cart[0].id;

          store.dispatch("carts/updateCartAction", { cartId, payload: data });
        }
      }
    }

    const isActive = ref(false);

    // let isOpen = false;
    function activeCart() {
      isActive.value = !isActive.value;
    }

    return {
      cartListDetail,
      addQuantity,
      subtractQuantity,
      deleteProduct,
      cartList,

      isActive,
      activeCart,
    };
  },
};
</script>
<style lang="scss">
.cart-pc {
  padding: 16px 8px;
  position: relative;

  &:hover .nav-detail {
    display: block;
  }

  .nav-detail {
    display: none;
    position: absolute;
    padding: 1.6rem 0;

    top: 6rem;
    left: -35rem;
    width: 40rem;
    min-height: 10rem;
    background-color: var(--secondary-clr);
    border: var(--border);
    border-radius: var(--border-radius);

    .subnav-tip {
      position: absolute;
      z-index: 0;
      overflow: hidden;
      width: 20px;
      height: 20px;
      border-top: 1px solid rgb(231, 229, 220);
      border-left: 1px solid rgb(231, 229, 220);
      background-color: var(--secondary-clr);
      transform: rotate(45deg);
      top: -1rem;
      left: 35.5rem;
    }

    .detail {
      p {
        text-align: center;
      }
    }
  }
  .payment {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 var(--pd-item);

    .total-price {
      padding: var(--pd-item) 0;
    }

    .check-out {
      padding: var(--pd-item);
      background-color: var(--btn-clr-primary-hover);
      color: var(--secondary-clr);
    }
  }
}

.empty {
  padding: 2rem;
  .image-cover {
    width: 5rem;
    margin: 0 auto;
  }
  p {
    text-align: center;
  }
}

.cart-mobile {
  display: none;
  position: relative;

  .nav-input:checked + .navbar-cart {
    opacity: 1;
    transform: translateX(-95.5%);
  }

  .navbar-cart {
    position: absolute;
    top: 8.5rem;
    position: fixed;
    border-radius: var(--border-radius);
    border: var(--border);

    width: 36rem;
    min-height: 10rem;
    opacity: 0;
    transition: transform 0.2s linear, opacity 0.2s linear;
    will-change: opacity, transform;

    background-color: #fff;

    &.active {
      opacity: 1;
      transform: translateX(-95.5%);
    }

    .image-cover {
      width: 10rem !important;
    }

    .name {
      max-width: 20rem !important;
    }
  }

  .payment {
    display: flex;
    width: 100%;
    padding: 1rem;
    justify-content: space-between;

    .total-price {
      padding: var(--pd-item);
    }

    .check-out {
      padding: var(--pd-item);
      background-color: var(--btn-clr-primary-hover);
      color: var(--secondary-clr);
    }
  }
}

.cart-btn {
  cursor: pointer;
  position: relative;
  .count {
    display: inline-block;
    padding: 2px;
    position: absolute;
    background-color: #fff;
    top: -10px;
    left: 14px;
    border-radius: 50%;
    line-height: 1;
    font-size: 1.2rem;
  }
}

.cart-list {
  max-height: calc(100vh - 76px - 77px - 16px);
  overflow-y: scroll;
  .cart-item {
    display: flex !important;
    justify-content: space-between;
    margin: 1rem;
    height: 15rem;
    .item > div {
      display: flex;
      gap: 1rem;
      .image-cover {
        width: 12rem;

        img {
          aspect-ratio: 1 / 1;
          border-radius: 8px;
          overflow: hidden;
        }
      }

      .name,
      .price {
        font-size: 2.6rem;
        max-width: 21rem;
      }

      .price {
        span {
          text-decoration: line-through;
        }
      }
    }
  }
}

.input-quantity button {
  padding-inline: 5px;
}

.delete-cart-item {
  i {
    cursor: pointer;
    font-size: 3rem;
  }
}

@media only screen and (min-width: 1024px) {
  .cart-list {
    height: unset !important;
  }
}

@media only screen and (max-width: 1023px) {
  .cart-mobile {
    display: inline-block;
  }
  .cart-pc {
    display: none;
  }
}
</style>

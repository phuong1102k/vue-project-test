<template>
  <!-- daily deal -->
  <div class="daily" v-if="item && item.image && item.name">
    <!-- v-if="item && item.image && item.name" -->
    <div class="wrapper">
      <div class="daily-product">
        <div class="base-caption">
          <div class="text">
            <h1 class="base-title">Daily deals</h1>

            <p class="base-subtitle">
              Need to find discounted products of the day? right here.
            </p>
          </div>

          <router-link to="/products" class="base-a">View all</router-link>
        </div>

        <div class="daily-product-list">
          <div class="item" v-for="(item, idx) in productDailyList" :key="idx">
            <a class="img-cover" @click="handleClickProduct(item.id)">
              <img v-if="item.image" :src="item.image" alt="product_daily" />
            </a>

            <div class="daily-product-detail">
              <a class="product-name">{{ item.name }}</a>

              <div class="product-rate">
                <div class="product-rate-star">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    class="spr-star"
                    style="width: 15px; height: 15px"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <path
                      fill="#48491e"
                      d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
                    ></path>
                  </svg>

                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    class="spr-star"
                    style="width: 15px; height: 15px"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <path
                      fill="#48491e"
                      d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
                    ></path>
                  </svg>

                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    class="spr-star"
                    style="width: 15px; height: 15px"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <path
                      fill="#48491e"
                      d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
                    ></path>
                  </svg>

                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    class="spr-star"
                    style="width: 15px; height: 15px"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <path
                      fill="#48491e"
                      d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
                    ></path>
                  </svg>

                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    class="spr-star"
                    style="width: 15px; height: 15px"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <path
                      fill="#48491e"
                      d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
                    ></path>
                  </svg>
                </div>
                <div class="product-rate-quatity">({{ item.rateQuatity }})</div>
              </div>

              <div class="product-desc">
                {{ item.description }}
              </div>

              <div class="product-price">
                <span class="product-price-original"
                  >${{ item.originalPrice }}</span
                >
                <span class="product-price-sale">${{ item.salePrice }}</span>
              </div>

              <div class="product-cart">
                <div action="" id="cart_form">
                  <button class="base-btn" @click="addProduct(item)">
                    Add to cart <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>

              <div class="countdown-time">
                <div class="countdown">
                  <span class="days">00</span>
                  <p class="days_ref">days</p>
                </div>

                <div class="countdown">
                  <span class="hours">00</span>
                  <p class="hours_ref">hours</p>
                </div>

                <div class="countdown">
                  <span class="minutes">00</span>
                  <p class="minutes_ref">minutes</p>
                </div>

                <div class="countdown">
                  <span class="seconds">00</span>
                  <p class="seconds_ref">seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import carousel from "vue-owl-carousel";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "DailyDeal",
  components: {},
  props: {
    productList: {
      required: true,
    },
    user: {
      type: Object,
    },
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();
    const handleClickProduct = (id) => {
      router.push(`/product-detail/${id}`);
    };

    const productDailyList = computed(() => {
      const productDaily = [];
      for (let i = 0; i < 3; i++) {
        productDaily.push(props.productList[i]);
      }
      return productDaily;
    });

    const cartList = computed(() => store.state.carts.cartList);

    function addProduct(product) {
      if (!localStorage.getItem("userLogin")) {
        alert("You have to sign in first");
        router.push("/sign-in");
      }
      product.quantity = 1;

      if (cartList.value.length == 0) {
        const data = {
          userId: props.user.user.id,
          detail: {
            cartList: [product],
          },
        };

        store.dispatch("carts/addNewCartAction", data);
      } else {
        let productId = [];
        for (let i = 0; i < cartList.value[0].detail.cartList.length; i++) {
          productId.push(cartList.value[0].detail.cartList[i].id);
        }
        if (!productId.includes(product.id)) {
          cartList.value[0].detail.cartList.push(product);

          const data = {
            userId: props.user.user.id,
            detail: {
              cartList: cartList.value[0].detail.cartList,
            },
          };
          // console.log(product);
          // cartList.value.push(product);
          // const userId = props.user.user.id;
          const cartId = cartList.value[0].id;
          // store.dispatch("carts/updateCartAction", { cartId, data });
          store.dispatch("carts/updateCartAction", { cartId, payload: data });
        } else {
          addQuantity(product);
        }
      }
    }

    function addQuantity(product) {
      for (let i = 0; i < cartList.value[0].detail.cartList.length; i++) {
        if (cartList.value[0].detail.cartList[i].id == product.id) {
          // alert(cartList.value[0].detail.cartList[i].id == product.id);
          cartList.value[0].detail.cartList[i].quantity++;

          const data = {
            userId: props.user.user.id,
            detail: {
              cartList: cartList.value[0].detail.cartList,
            },
          };
          // console.log(product);
          // cartList.value.push(product);
          // const userId = props.user.user.id;
          const cartId = cartList.value[0].id;
          // store.dispatch("carts/updateCartAction", { cartId, data });
          store.dispatch("carts/updateCartAction", { cartId, payload: data });
        }
      }
    }

    return {
      productDailyList,
      cartList,
      handleClickProduct,
      addProduct,
    };
  },
  // components: { carousel },
};
// export default {
//   // components: {carousel },
// };
</script>
// đang làm dở scss
<style lang="scss">
.daily-product-detail {
  .product-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

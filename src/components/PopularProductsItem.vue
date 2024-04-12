<template>
  <div v-if="item && item.image && item.name" class="item">
    <a class="image-cover" @click="handleClickProduct">
      <img :src="item.image" alt="best product" />
    </a>

    <div class="base-status">Hot</div>
    <div class="base-percent">25%</div>

    <div class="item-body">
      <a class="base-name">{{ item.name }}</a>

      <div class="item-body-bottom">
        <div class="base-price">
          <span class="base-price-original">${{ item.originalPrice }}</span>
          <span class="base-price-sale">${{ item.salePrice }}</span>
        </div>

        <div class="cart">
          <div action="" id="cart form">
            <button class="base-btn" @click="addProduct(item)">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "PopularProductsItem",
  props: {
    item: {
      type: Object,
    },
    userInfo: {},
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();

    const handleClickProduct = () => {
      router.push(`/product-detail/${props.item.id}`);
    };

    const cartList = computed(() => store.state.carts.cartList);

    const cartListDetail = computed(() =>
      cartList.value && cartList.value[0]
        ? cartList.value[0].detail.cartList
        : []
    );

    function addProduct(product) {
      // console.log(product);
      if (!localStorage.getItem("userLogin")) {
        alert("You have to sign in first");
        router.push("/sign-in");
      }
      product.quantity = 1;

      if (cartList.value.length == 0) {
        const data = {
          userId: props.userInfo.user.id,
          detail: {
            cartList: [product],
          },
        };

        store.dispatch("carts/addNewCartAction", data);
      } else {
        let productId = [];
        for (let i = 0; i < cartListDetail.value.length; i++) {
          productId.push(cartListDetail.value[i].id);
        }
        if (!productId.includes(product.id)) {
          cartListDetail.value.push(product);

          const data = {
            userId: props.userInfo.user.id,
            detail: {
              cartList: cartListDetail.value,
            },
          };

          const cartId = cartList.value[0].id;
          store.dispatch("carts/updateCartAction", { cartId, payload: data });
        } else {
          addQuantity(product);
        }
      }
    }

    function addQuantity(product) {
      for (let i = 0; i < cartListDetail.value.length; i++) {
        if (cartListDetail.value[i].id == product.id) {
          // alert(cartListDetail[i].id == product.id);
          cartListDetail.value[i].quantity++;

          const data = {
            userId: props.userInfo.user.id,
            detail: {
              cartList: cartListDetail.value,
            },
          };
          const cartId = cartList.value[0].id;
          store.dispatch("carts/updateCartAction", { cartId, payload: data });
        }
      }
    }

    return {
      handleClickProduct,
      addProduct,
      cartList,
      cartListDetail,
    };
  },
};
</script>

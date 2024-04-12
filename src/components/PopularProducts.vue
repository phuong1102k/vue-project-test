<template>
  <!-- popular products-->
  <div class="popular">
    <div class="wrapper">
      <div class="base-caption">
        <div class="text">
          <h1 class="base-title">Best seller</h1>

          <p class="base-subtitle">
            Looking for safe skincare products that actually work? Look no
            further!
          </p>
        </div>

        <a href="#" class="base-a">View all</a>
      </div>

      <div class="best-product-list owl-carousel owl-theme owl-loaded">
        <PopularProductsItem
          v-for="(popularProduct, idx) in productBestSellerList"
          :key="idx"
          :item="popularProduct"
          :userInfo="userLogin"
        ></PopularProductsItem>
      </div>
    </div>
  </div>
</template>

<script>
import PopularProductsItem from "@/components/PopularProductsItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "PopularProducts",
  props: {
    productList: {},
  },
  components: {
    PopularProductsItem,
  },

  setup(props) {
    const store = useStore();
    const userLogin = computed(() => store.state.auth.userLogin);

    const productBestSellerList = computed(() => {
      const productBestSeller = [];
      for (let i = 0; i < 6; i++) {
        productBestSeller.push(props.productList[i]);
      }
      return productBestSeller;
    });

    return {
      productBestSellerList,
      userLogin,
    };
  },
};
</script>

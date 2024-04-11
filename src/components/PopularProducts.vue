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
        ></PopularProductsItem>
      </div>
    </div>
  </div>
</template>

<script>
// import { useStore } from "vuex";
// import { computed } from "vue";
import PopularProductsItem from "@/components/PopularProductsItem.vue";

export default {
  name: "PopularProducts",
  props: {
    productList: {},
  },
  components: {
    PopularProductsItem,
  },
  setup(props) {
    const productBestSellerList = [];
    // const router = useRouter();
    // console.log(props);

    for (let i = 0; i < 6; i++) {
      productBestSellerList.push(props.productList[i]);
    }
    return {
      productBestSellerList,
    };
  },
};
</script>

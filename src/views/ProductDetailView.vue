<template>
  <main>
    <!-- benefit n bar -->
    <BenifitBar></BenifitBar>

    <!-- breadcrumbs -->
    <div class="breadcrumbs">
      <div class="wrapper">
        <ul>
          <li>
            <a href="#"><i class="fa-solid fa-house"></i></a>
          </li>

          <li>
            <a href="#"><i class="fa-solid fa-angle-right"></i></a>
          </li>

          <li><a href="#">Shop</a></li>

          <li>
            <a href="#"><i class="fa-solid fa-angle-right"></i></a>
          </li>

          <li>
            <a href="#">Products</a>
          </li>

          <li>
            <a href="#"><i class="fa-solid fa-angle-right"></i></a>
          </li>

          <li>
            <a href="#"> {{ detailProduct.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- detail -->
    <ProductItem :detail="detailProduct" :userInfo="userLogin"></ProductItem>

    <!-- product question -->
    <ProductQuestion></ProductQuestion>

    <!-- also like -->
    <PopularProducts :productList="productList"></PopularProducts>

    <!-- review -->
    <ReviewProductList></ReviewProductList>

    <!-- more sale -->
    <SaleGrid></SaleGrid>

    <!-- email -->
    <ContactEmail></ContactEmail>
  </main>
</template>

<script>
import BenifitBar from "@/components/BenifitBar.vue";
import ProductItem from "@/components/ProductItem.vue";
import ProductQuestion from "@/components/ProductQuestion.vue";
import PopularProducts from "@/components/PopularProducts.vue";
import ReviewProductList from "@/components/ReviewProductList.vue";
// import AdvertiseList from "@/components/AdvertiseList.vue";
import ContactEmail from "@/components/ContactEmail.vue";
import SaleGrid from "@/components/SaleGrid.vue";

import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ProductDetailView",
  components: {
    BenifitBar,
    ProductItem,
    ProductQuestion,
    PopularProducts,
    ReviewProductList,
    ContactEmail,
    SaleGrid,
  },

  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    const userLogin = computed(() => store.state.auth.userLogin);


    store.dispatch("products/getProductListAction");
    const productList = computed(() => store.state.products.productList);

    store.dispatch("products/getProductDetailAction", route.params.productId);
    const detailProduct = computed(() => store.state.products.productDetail);

    // store.dispatch("products/getProductDetailAction", route.params.productId);
    // const productDetail = computed(() => store.state.products.productDetail);

    return {
      productList,
      detailProduct,
      userLogin,
    };
  },
};
</script>

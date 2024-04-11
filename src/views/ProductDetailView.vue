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
    <ProductItem :detail="detailProduct"></ProductItem>

    <!-- discover -->
    <div class="discover">
      <div class="wrapper">
        <div class="base-caption">
          <h1 class="base-title">Discover the bundle</h1>
        </div>

        <div class="discover-grid owl-carousel owl-theme">
          <div class="item discover-product">
            <div class="image-cover">
              <img
                src="/images/product/Collection_Product-Brand-Bartlett-Pear-min.jpg"
                alt="bundle_1"
              />
            </div>

            <div class="item-body">
              <a class="base-name">Barlett Pear Bundle</a>

              <div class="item-body-bottom">
                <div class="base-price">
                  <span class="base-price-original">$75</span>
                  <span class="base-price-sale">$50</span>
                </div>

                <div class="cart">
                  <form action="" id="cart form">
                    <button class="base-btn">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="item discover-product">
            <div class="image-cover">
              <img
                src="/images/product/Collection_Product-Brand-Bartlett-Pear-min.jpg"
                alt="bundle_1"
              />
            </div>

            <div class="item-body">
              <a class="base-name">Barlett Pear Bundle</a>

              <div class="item-body-bottom">
                <div class="base-price">
                  <span class="base-price-original">$75</span>
                  <span class="base-price-sale">$50</span>
                </div>

                <div class="cart">
                  <form action="" id="cart form">
                    <button class="base-btn">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="item discover-product">
            <div class="image-cover">
              <img
                src="/images/product/Collection_Product-Brand-Bartlett-Pear-min.jpg"
                alt="bundle_1"
              />
            </div>

            <div class="item-body">
              <a class="base-name">Barlett Pear Bundle</a>

              <div class="item-body-bottom">
                <div class="base-price">
                  <span class="base-price-original">$75</span>
                  <span class="base-price-sale">$50</span>
                </div>

                <div class="cart">
                  <form action="" id="cart form">
                    <button class="base-btn">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
  // setup() {
  //   const store = useStore();
  //   store.dispatch("rooms/getProductDetailAction", route.params.productId);
  //   const productDetail = computed(() => store.state.products.productDetail);

  //   return {
  //     productDetail,
  //   };
  // },

  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");

    store.dispatch("products/getProductListAction");
    const productList = computed(() => store.state.products.productList);

    store.dispatch("products/getProductDetailAction", route.params.productId);
    const detailProduct = computed(() => store.state.products.productDetail);

    // store.dispatch("products/getProductDetailAction", route.params.productId);
    // const productDetail = computed(() => store.state.products.productDetail);

    return {
      productList,
      detailProduct,
    };
  },
};
</script>

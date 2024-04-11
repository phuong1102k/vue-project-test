<template>
  <!-- summer sale -->
  <div class="summer">
    <div class="wrapper">
      <div class="base-caption">
        <div class="text">
          <h1 class="base-title">Summer sale</h1>

          <p class="base-subtitle">
            Let new formulas help you form new skincare routines
          </p>
        </div>

        <a href="#" class="base-a">View all</a>
      </div>

      <div class="summer-product-list">
        <div class="summer-product">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            preload="metadata"
          >
            <source src="/images/video/summer_sale.mp4" type="video/mp4" />
          </video>

          <div class="base-banner-caption">
            <h1 class="base-title">Summer sale</h1>

            <p class="base-subtitle">Sale up to 40%</p>

            <router-link to="/products" class="base-btn">Shop now</router-link>
          </div>
        </div>

        <SummerSaleItem
          v-for="(item, idx) in summerList"
          :key="idx"
          :summer="item"
        ></SummerSaleItem>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import SummerSaleItem from "@/components/SummerSaleItem.vue";

export default {
  name: "SummerSale",
  components: {
    SummerSaleItem,
  },
  setup() {
    const store = useStore();
    store.dispatch("products/getSummerProductListAction");
    const summerList = computed(() => store.state.products.summerList);

    return {
      summerList,
    };
  },
};
</script>

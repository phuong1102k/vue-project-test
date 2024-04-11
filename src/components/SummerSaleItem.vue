<template>
  <div class="item" @click="handleClickProduct">
    <div class="image-cover">
      <img :src="summer.image" alt="summer_1" />
    </div>

    <div class="base-status">Hot</div>
    <div class="base-percent">25%</div>

    <div class="item-body">
      <a class="base-name">{{ summer.name }}</a>

      <div class="item-body-bottom">
        <div class="base-price">
          <span class="base-price-original">${{ summer.salePrice }}</span>
          <span class="base-price-sale">${{ summer.originalPrice }}</span>
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
</template>
<script>
import { useRouter } from "vue-router";

export default {
  name: "SummerSaleItem",

  props: {
    summer: {},
  },
  setup(props) {
    const router = useRouter();
    const handleClickProduct = () => {
      router.push(`/product-detail/${props.summer.id}`);
    };
    return {
      handleClickProduct,
    };
  },
};
</script>

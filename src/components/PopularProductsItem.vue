<template>
  <div class="item">
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
  name: "PopularProductsItem",
  props: {
    item: {
      type: Object,
    },
  },

  setup(props) {
    const router = useRouter();
    const handleClickProduct = () => {
      router.push(`/product-detail/${props.item.id}`);
    };
    return {
      handleClickProduct,
    };
  },
};
</script>

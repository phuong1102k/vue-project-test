<template>
  <!-- bundle and save -->
  <div v-if="productBundle && productBundle.image" class="bundle">
    <div class="wrapper">
      <div class="base-caption">
        <div class="text">
          <h1 class="base-title">Bundle & save</h1>

          <p class="base-subtitle">Best treat for your skin</p>
        </div>

        <a href="#" class="base-a">View all</a>
      </div>

      <div class="bundle-grid">
        <div class="bundle-video">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            preload="metadata"
          >
            <source src="/images/video/bundle.mp4" type="video/mp4" />
          </video>

          <div class="base-banner-caption">
            <p class="base-subtitle">Bundle of the week</p>

            <h1 class="base-title">Barlett pear bundle</h1>

            <router-link to="/products" class="base-btn">Shop now</router-link>
          </div>
        </div>

        <div class="bundle-product" @click="handleClickProduct">
          <div class="image-cover">
            <img :src="productBundle.image" alt="bundle_1" />
          </div>

          <div class="base-status">Hot</div>

          <div class="item-body">
            <a class="base-name">{{ productBundle.name }}</a>
            <p class="product-desc">
              {{ productBundle.description }}
            </p>

            <div class="item-body-bottom">
              <div class="base-price">
                <span class="base-price-original"
                  >${{ productBundle.originalPrice }}</span
                >
                <span class="base-price-sale"
                  >${{ productBundle.salePrice }}</span
                >
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
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "BundleNSave",
  props: {
    productBundle: {
      type: Object,
    },
  },
  components: {
    // HelloWorld,
  },
  setup(props) {
    const router = useRouter();
    const handleClickProduct = () => {
      router.push(`/product-detail/${props.productBundle.id}`);
    };
    return {
      handleClickProduct,
    };
  },
};
</script>

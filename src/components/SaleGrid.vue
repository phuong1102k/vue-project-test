<template>
  <!-- more sale -->
  <div class="sale">
    <div class="wrapper">
      <div class="sale-grid">
        <div class="sale-grid-item">
          <div class="image-cover">
            <img
              src="/images/more_sale/Hand_Salve_Lifestyle-General-1-min.jpg"
              alt="summer-sale"
            />
          </div>

          <div class="base-banner-caption">
            <p class="base-subtitle">Save up to 40%</p>

            <a class="base-title">Summer Sale</a>

            <router-link to="/products" class="base-btn"
              >Shop Sale Now</router-link
            >
          </div>
        </div>

        <div class="sale-grid-item">
          <div class="image-cover">
            <img
              src="/images/more_sale/Collection_Product-Brand-Bartlett-Pear-min.jpg"
              alt="bundle-save"
            />
          </div>

          <div class="base-banner-caption">
            <p class="base-subtitle">Combine the Great</p>

            <a class="base-title">Bundle & Save</a>

            <router-link to="/products" class="base-btn"
              >Shop Bundle Now</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SaleGrid",
  components: {},
};
</script>
<style lang="scss">
.sale-grid-item {
  .base-title {
    display: block;
  }
}

@media screen and (max-width: 739px) {
  .sale-grid-item {
    .base-subtitle {
      font-size: 1.6rem;
    }
    .base-title {
      font-size: 2rem;
      font-weight: bolder;
    }
    .base-btn {
      display: none;
    }
  }
}
</style>

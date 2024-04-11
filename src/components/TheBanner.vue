<template>
  <!-- banner -->
  <div class="banner">
    <div class="wrapper">
      <div class="banner-1">
        <img src="/images/slider/demo-01.jpg" alt="skincare" />

        <div class="base-banner-caption">
          <h1 class="base-title">Organic skincare</h1>

          <p class="base-subtitle">
            Making skincare safe, natural, and accessible
          </p>

          <router-link to="/products" class="base-btn">Shop now</router-link>
        </div>
      </div>

      <div class="banner-2">
        <img src="/images/slider/Body-Wash_Product.jpg" alt="body wash" />

        <div class="base-banner-caption">
          <h1 class="base-title">Barlett pear body wash</h1>

          <p class="base-subtitle">Say "Hi!" to a new formula</p>

          <router-link to="/products" class="base-btn">Shop now</router-link>
        </div>
      </div>

      <div class="banner-3">
        <img src="/images/slider/Face-Oil_Product.jpg" alt="face oil" />

        <div class="base-banner-caption">
          <h1 class="base-title">Rose petal face oil</h1>

          <p class="base-subtitle">Back in stock</p>

          <router-link to="/products" class="base-btn">Shop now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBanner",
  components: {},
};
</script>

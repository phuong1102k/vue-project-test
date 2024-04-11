<template>
  <!-- benefit n bar -->
  <div class="benefit-bar">
    <div class="wrapper">
      <swiper-container
        class="mySwiper"
        navigation="true"
        loop="true"
        space-between="30"
        autoplay-delay="3000"
        autoplay-disable-on-interaction="false"
      >
        <swiper-slide>
          <div class="benefit-icon">
            <img src="/images/benefit/delivery-truck-9158.svg" alt="delivery" />
          </div>

          <ul class="benefit-text">
            <li class="benefit-text-title">Free delivery over $35</li>
            <li class="benefit-text-sub">Fast and free to your door</li>
          </ul>
        </swiper-slide>

        <swiper-slide>
          <div class="benefit-icon">
            <img src="/images/benefit/leaping-bunny.svg" alt="leaping bunny" />
          </div>

          <ul class="benefit-text">
            <li class="benefit-text-title">Vegan and cruelty-free</li>
            <li class="benefit-text-sub">Verified by Leaping Bunny™️</li>
          </ul>
        </swiper-slide>

        <swiper-slide>
          <div class="benefit-icon">
            <img src="/images/benefit/noun-stars-5039633.svg" alt="star" />
          </div>

          <ul class="benefit-text">
            <li class="benefit-text-title">Tried & true guarantee</li>
            <li class="benefit-text-sub">Free returns, no questions asked</li>
          </ul>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "BenifitBar",
  components: {
    // HelloWorld,
  },
};
</script>

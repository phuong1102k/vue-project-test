<template>
  <!-- advertisement -->
  <div class="advertise">
    <div class="wrapper">
      <div class="advertise-grid">
        <div class="advertise-grid-item">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            preload="metadata"
          >
            <source src="/images/video/about_us.mp4" type="video/mp4" />
          </video>

          <div class="base-banner-caption">
            <p class="base-subtitle">Our brand values</p>

            <h1 class="base-title">Discover what we stand for</h1>

            <router-link to="/about" class="base-btn">About us</router-link>
          </div>
        </div>

        <div class="advertise-grid-item">
          <div class="image-cover">
            <img src="/images/faq/hero_img-min.jpg" alt="faq" />
          </div>

          <div class="base-banner-caption">
            <p class="base-subtitle">Clarity is important to us</p>

            <h1 class="base-title">Get answer you are looking for</h1>

            <a href="#" class="base-btn">Read FAQs</a>
          </div>
        </div>

        <div class="advertise-grid-item">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            controls="controls"
            preload="metadata"
          >
            <source src="/images/video/advertise.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvertiseList",
  components: {
    // HelloWorld,
  },
};
</script>

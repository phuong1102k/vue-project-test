<template>
  <main>
    <!-- benefit n bar -->
    <BenifitBar></BenifitBar>

    <!-- head title -->
    <h1 class="head-title">Discover what we stand for.</h1>
    <!-- about -->
    <div class="about">
      <div class="wrapper">
        <div class="video">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            preload="metadata"
          >
            <source src="/images/video/about_us.mp4" type="video/mp4" />
          </video>
        </div>

        <h2>
          We're on a mission to make healthy skincare accessible to everyone and
          that's why we use only the best ingredients in our safe and natural
          skincare products.
        </h2>

        <div class="grid-container">
          <div class="grid-item">
            <img src="/images/about_page/about_1.jpg" alt="about_1" />
          </div>

          <div class="grid-item">
            <img src="/images/about_page/about_2.jpg" alt="about_2" />
          </div>

          <div class="grid-item text">
            <h3>About Us</h3>
            <p>
              We're here to make skincare as safe, natural, and accessible to
              everyone as possible. We believe that everyone deserves healthy
              skin—and that's why we use only the best ingredients in our
              skincare products. If you feel this way, we're here for you. We've
              got your back!<br />
              <br />
              We know that there are a lot of people who are tired of putting
              their faith in products that are full of chemicals—but they don't
              have a choice, because the only options they can find at the
              drugstore don't seem like they're worth it. <br />
              <br />
              Skincare is hard, but we also know that you deserve to have
              beautiful skin, regardless of your income or socioeconomic status.
              That's why we've created products that are safe, natural, and
              affordable—so everyone can enjoy looking and feeling their best!
            </p>
          </div>
          <div class="grid-item">
            <img src="/images/about_page/about_3.jpg" alt="about_3" />
          </div>
        </div>
      </div>
    </div>

    <!-- blog -->
    <BlogList></BlogList>

    <!-- shop product type -->
    <ProductType></ProductType>

    <!-- email -->
    <ContactEmail></ContactEmail>
  </main>
</template>

<script>
import BenifitBar from "@/components/BenifitBar.vue";
import ProductType from "@/components/ProductType.vue";
import ContactEmail from "@/components/ContactEmail.vue";
import BlogList from "@/components/BlogList.vue";

import { useStore } from "vuex";

export default {
  name: "AboutView",
  components: {
    BenifitBar,
    ProductType,
    ContactEmail,
    BlogList,
  },

  setup() {
    const store = useStore();
    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  },
};
</script>

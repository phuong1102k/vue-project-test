<template>
  <!-- shop product type -->
  <div class="type">
    <div class="wrapper">
      <div class="base-caption">
        <div class="text">
          <p class="base-subtitle">Look no further</p>

          <h1 class="base-title">Shop by product type</h1>
        </div>

        <a href="#" class="base-a">View all</a>
      </div>

      <div class="type-list owl-carousel owl-theme owl-loaded">
        <div class="item" v-for="(type, idx) in typeList" :key="idx">
          <div class="image-cover">
            <img :src="type.image" alt="best_product" />
          </div>

          <div class="base-banner-caption">
            <p class="base-subtitle">{{ type.subTitle }}</p>

            <h1 class="base-title">{{ type.name }}</h1>

            <router-link to="/products" class="base-btn">Shop now</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ProductType",
  components: {},
  setup() {
    const store = useStore();
    store.dispatch("types/getTypeListAction");
    const typeList = computed(() => store.state.types.typeList);

    return {
      typeList,
    };
  },
};
</script>

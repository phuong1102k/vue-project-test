<template>
  <!-- search -->
  <div class="search">
    <form id="search_term" class="search-form" style="position: relative">
      <label for="search_input">
        <span class="icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </label>

      <input
        id="search_input"
        class="search-input"
        type="search"
        v-model="keyword"
        placeholder="Enter your search terms"
      />

      <button class="base-btn search-btn">Search</button>
    </form>

    <ul class="search-list" v-if="productSearchList.length > 0 && keyword">
      <!-- <li>{{ keyword }}</li> -->
      <li
        class="item"
        v-for="(product, idx) in productSearchList"
        :key="idx"
        @click="handleClickProduct(product)"
      >
        <div class="image-cover">
          <img :src="product.image" alt="product" />
        </div>
        <div>
          <p class="name">{{ product.name }}</p>
          <p class="price">
            ${{ product.salePrice }} <span>${{ product.originalPrice }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "TheMainSearch",
  setup() {
    const keyword = ref(""); //hợp lưu dữ liệu thông thường (string, num,null,...)
    const store = useStore();
    const router = useRouter();

    watch(keyword, (newKeyword) => {
      store.dispatch("products/getProductSearchAction", newKeyword);
    });
    // các state lấy trên store về phải thông qua computed để tính toán lại
    const productSearchList = computed(
      () => store.state.products.productSearchList
    );

    const handleClickProduct = (product) => {
      router.push(`/product-detail/${product.id}`);
      keyword.value = "";
    };

    return {
      keyword,
      productSearchList,
      handleClickProduct,
    };
  },
};
</script>
<style lang="scss">
.search-list {
  border-radius: 8px;
  z-index: 1;
  max-height: 75vh;
  overflow-y: scroll;
  position: absolute;
  background-color: #fff;
  top: calc(100% + 2rem);
  width: inherit;

  .item {
    display: flex !important;
    gap: 1rem;
    padding: 1rem;

    .image-cover {
      width: 15rem;
      height: 15rem;
      border-radius: 8px;
      overflow: hidden;

      img {
        aspect-ratio: 1 / 1;
        width: 100%;
      }
    }

    .name,
    .price {
      font-size: 2.6rem;
    }

    .price {
      span {
        text-decoration: line-through;
      }
    }
  }
}
</style>

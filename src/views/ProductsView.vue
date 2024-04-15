<template>
  <main>
    <BenifitBar></BenifitBar>
    <!-- breadcumb -->
    <div class="breadcrumb">
      <div class="wrapper">
        <span>Home</span><span><i class="fa-solid fa-angle-right"></i></span
        ><span>Products</span>
      </div>
    </div>

    <div class="product-view">
      <div class="wrapper">
        <!-- sidebar -->
        <div class="sidebar">
          <div class="wrapper">
            <div class="title">Product Type</div>
            <ul class="catergory">
              <li v-for="(productType, idx) in typeList" :key="idx">
                <span><input type="checkbox" /> {{ productType.name }} </span>
              </li>
            </ul>

            <div class="title">Skin type</div>
            <ul class="catergory">
              <li v-for="(skinType, idx) in typeSkinList" :key="idx">
                <a href="#"><input type="checkbox" />{{ skinType.name }}</a>
              </li>
            </ul>

            <div class="title">Ingredients</div>
            <ul class="catergory">
              <li
                v-for="(ingredientType, idx) in typeIngredientList"
                :key="idx"
              >
                <a
                  ><input type="checkbox" value="Lemon" />{{
                    ingredientType.name
                  }}</a
                >
              </li>
            </ul>
            <button>Filter</button>
          </div>
        </div>

        <div class="product">
          <div class="head-tab">
            <div class="search">
              <input type="search" placeholder="Search" />
            </div>
            <div class="soft">
              <select name="soft" id="soft">
                <option value="">Soft</option>
                <option value="softed from low to high">
                  Softed from low to high
                </option>
                <option value="softed from high to low">
                  Softed from high to low
                </option>
                <option value="sorted from a-z">Sorted from a-z</option>
                <option value="sorted from z-a">Sorted from z-a</option>
              </select>
            </div>

            <div class="price">
              <select name="price" id="price">
                <option value="">Price</option>
                <option value="softed from low to high">Lower than 50$</option>
                <option value="sorted from a-z">From 50$ to 100$</option>
                <option value="sorted from z-a">Upper than 100$</option>
              </select>
            </div>
          </div>
          <div class="product-grid">
            <div
              class="item"
              v-for="(product, idx) in productList"
              :key="idx"
              @click="handleClickProduct(product)"
            >
              <div class="image-cover">
                <img :src="product.image" alt="summer_1" />
              </div>

              <div class="base-status">Hot</div>
              

              <div class="item-body">
                <a class="base-name" href="./product_detail.html">{{
                  product.name
                }}</a>

                <div class="item-body-bottom">
                  <div class="base-price">
                    <span class="base-price-original"
                      >${{ product.originalPrice }}</span
                    >
                    <span class="base-price-sale"
                      >${{ product.salePrice }}</span
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
          <div class="page-tab">
            <a><i class="fa-solid fa-angle-left"></i></a>
            <a>1</a>
            <a>2</a>
            <a>3</a>
            <a>...</a>
            <a><i class="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- advertisement -->
    <AdvertiseList></AdvertiseList>

    <!-- email -->
    <ContactEmail></ContactEmail>
  </main>
</template>

<script>
import BenifitBar from "@/components/BenifitBar.vue";
import AdvertiseList from "@/components/AdvertiseList.vue";
import ContactEmail from "@/components/ContactEmail.vue";

import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "ProductListView",
  components: { BenifitBar, AdvertiseList, ContactEmail },

  setup() {
    const store = useStore();
    const router = useRouter();

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");

    store.dispatch("products/getProductListAction");
    const productList = computed(() => store.state.products.productList);

    store.dispatch("types/getTypeIngredientListAction");
    const typeIngredientList = computed(
      () => store.state.types.typeIngredientList
    );

    store.dispatch("types/getTypeListAction");
    const typeList = computed(() => store.state.types.typeList);

    store.dispatch("types/getTypeSkinListAction");
    const typeSkinList = computed(() => store.state.types.typeSkinList);

    const handleClickProduct = (product) => {
      router.push(`/product-detail/${product.id}`);
    };

    return {
      productList,
      typeIngredientList,
      typeList,
      typeSkinList,
      handleClickProduct,
    };
  },
};
</script>

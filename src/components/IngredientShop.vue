<template>
  <!-- Ingredients -->
  <div class="ingredient">
    <div class="wrapper">
      <div class="base-caption">
        <div class="text">
          <p class="base-subtitle">Discover your scent</p>

          <h1 class="base-title">Most Popular Ingredients</h1>
        </div>

        <a href="#" class="base-a">View all</a>
      </div>

      <div class="ingredient-grid">
        <IngredientShopItem
          :ingredientList="typeIngredientList"
        ></IngredientShopItem>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

import IngredientShopItem from "@/components/IngredientShopItem.vue";

export default {
  name: "IngredientShop",
  components: {
    IngredientShopItem,
  },
  setup() {
    const store = useStore();
    store.dispatch("types/getTypeIngredientListAction");
    const typeIngredientList = computed(
      () => store.state.types.typeIngredientList
    );
    return {
      typeIngredientList,
    };
  },
};
</script>

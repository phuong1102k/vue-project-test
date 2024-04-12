<template>
  <div
    class="ingredient-grid-item"
    v-for="(ingredient, idx) in ingredientRender"
    :key="idx"
    :ingredient="ingredient"
  >
    <div v-if="ingredient && ingredient.image && ingredient.subTitle">
      <div class="image-cover">
        <img :src="ingredient.image" alt="lilly" />
      </div>
      <div class="base-banner-caption">
        <p class="base-subtitle">{{ ingredient.subTitle }}</p>

        <h1 class="base-title">{{ ingredient.name }}</h1>

        <router-link to="/products" class="base-btn">Shop now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientShopItem",
  props: {
    ingredientList: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const ingredientRender = [];

    for (var i = 0; i < 3; i++) {
      ingredientRender.push(props.ingredientList[i]);
    }

    return {
      ingredientRender,
    };
  },
};
</script>

<template>
  <!-- review -->
  <div class="review">
    <div class="wrapper">
      <div class="base-caption">
        <div class="text">
          <p class="base-subtitle">These are not actually real!</p>

          <h1 class="base-title">Real Customers Real Reviews</h1>
        </div>

        <a href="#" class="base-a">View all</a>
      </div>

      <div
        class="review-list owl-carousel owl-theme owl-loaded"
        v-for="(review, idx) in reviewList"
        :key="idx"
      >
        <ReviewListItem :review="review"></ReviewListItem>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ReviewListItem from "@/components/ReviewListItem.vue";

export default {
  name: "ReviewList",
  components: { ReviewListItem },
  setup() {
    const store = useStore();
    store.dispatch("reviews/getReviewListAction");
    const reviewList = computed(() => store.state.reviews.reviewList);

    return {
      reviewList,
    };
  },
};
</script>

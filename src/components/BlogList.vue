<template>
  <!-- blog -->
  <div class="blog">
    <div class="wrapper">
      <div class="base-caption">
        <div class="text">
          <p class="base-subtitle">From the blog</p>

          <h1 class="base-title">Find The Routine For You</h1>
        </div>

        <a href="#" class="base-a">View all</a>
      </div>

      <div
        class="blog-list owl-carousel owl-theme owl-loaded"
        v-for="(blog, idx) in blogList"
        :key="idx"
      >
        <BlogListItem :blog="blog"></BlogListItem>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import BlogListItem from "@/components/BlogListItem.vue";

export default {
  name: "BlogList",
  components: { BlogListItem },
  setup() {
    const store = useStore();

    store.dispatch("blogs/getBlogListAction");
    const blogList = computed(() => store.state.blogs.blogList);

    return {
      blogList,
    };
  },
};
</script>

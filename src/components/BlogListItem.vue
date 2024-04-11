<template>
  <div class="item">
    <div class="image-cover">
      <img src="/images/blog/Bartlett_Pear-2.jpg" alt="blog_1" />
    </div>

    <div class="item-body">
      <a class="base-name"> {{ blog.name }}</a>

      <p class="item-body-desc">
        {{ blog.description }}
      </p>
      <a href="" class="base-a">Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogListItem",
  props: {
    blog: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="item">
    <div class="review-content">
      <div class="product-rate">
        <div class="product-rate-star">
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="spr-star"
            style="width: 15px; height: 15px"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <path
              fill="#48491e"
              d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
            ></path>
          </svg>

          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="spr-star"
            style="width: 15px; height: 15px"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <path
              fill="#48491e"
              d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
            ></path>
          </svg>

          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="spr-star"
            style="width: 15px; height: 15px"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <path
              fill="#48491e"
              d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
            ></path>
          </svg>

          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="spr-star"
            style="width: 15px; height: 15px"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <path
              fill="#48491e"
              d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
            ></path>
          </svg>

          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="spr-star"
            style="width: 15px; height: 15px"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <path
              fill="#48491e"
              d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"
            ></path>
          </svg>
        </div>
      </div>

      <p class="review-content-text">
        <strong>{{ review.headContent }}</strong>
        <br />
        {{ review.content }}
      </p>

      <p class="review-source">— {{ review.user.name }}</p>
    </div>

    <div class="review-shop">
      <div class="image-cover">
        <img :src="review.product.image" alt="review_1" />
      </div>
      <router-link :to="`/product-detail/${review.product.id}`" class="base-a"
        >View {{ review.product.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewListItem",
  props: {
    review: {
      type: Object,
    },
  },
};
</script>

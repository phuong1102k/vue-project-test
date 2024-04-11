<template>
  <!-- email -->
  <div class="email">
    <div class="wrapper">
      <div class="base-caption">
        <h1 class="base-title">Subscribe to our emails</h1>
        <p class="sub-title">
          Be the first to know about new collections and exclusive offers.
        </p>
      </div>

      <div class="subcribe">
        <form action="" id="email" class="subcribe-form">
          <label for="email">
            <span class="icon">
              <i class="fa-regular fa-envelope"></i>
            </span>
          </label>

          <input
            id="email_input"
            type="email"
            class="email-input"
            placeholder="Enter your email..."
          />

          <button class="base-btn email-btn">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactEmail",
  components: {},
};
</script>

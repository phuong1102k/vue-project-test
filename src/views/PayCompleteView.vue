<template>
  <main>
    <div class="pay-complete">
      <div class="wrapper">
        <div class="complete">
          <div class="image-cover">
            <img src="/images/payment_complete/check.png" alt="checked" />
          </div>
          <p>Payment success</p>
          <p>Your order number is <span>833883794</span>.</p>
          <p>
            You can see deatails in
            <router-link to="/user-profile">my order</router-link>.
          </p>

          <router-link to="/" class="continue-shopping"
            >Continue shopping</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "PaymentView",

  setup() {
    const store = useStore();
    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    const userLogin = computed(() => store.state.auth.userLogin);

    return {
      userLogin,
    };
  },
};
</script>
<style lang="scss">
.wrapper {
  .complete {
    margin: calc(var(--m-feature) / 2) auto var(--m-feature);
    text-align: center;
    padding: var(--m-feature) calc(var(--m-feature) * 1.5);
    border-radius: 2.4rem;
    width: min(100%, 50rem);

    box-shadow: 0 1px 10px 1px rgba(#000000, 0.3);
    .image-cover {
      margin: 0 auto;
      width: 10rem;
      img {
        aspect-ratio: 1 / 1;
      }
    }

    p {
    }

    p:first-of-type {
      font-weight: bold;
      margin-block: var(--pd-item);
      text-transform: uppercase;
    }

    p:nth-of-type(2) {
      margin-block: calc(var(--pd-item) / 2);
      span {
        font-weight: bold;
        color: var(--btn-clr-primary-hover);
      }
    }

    p:last-of-type {
      margin-block: calc(var(--pd-item) / 2) var(--pd-item);
      a {
        color: blue;
      }
    }

    .continue-shopping {
      display: block;
      padding: 8px var(--pd-item);

      text-transform: uppercase;

      border-radius: var(--border-radius);
      color: var(--secondary-clr);
      background-color: var(--btn-clr-primary-hover);
    }
  }
}
</style>

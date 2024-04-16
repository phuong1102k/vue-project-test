<template>
  <main>
    <BenifitBar></BenifitBar>
    <div class="user">
      <div class="wrapper">
        <h1>Login</h1>
        <form action="" id="user_form" @submit.prevent="handleSubmit">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="userLogin.email" />

          <label for="password">Password</label>
          <input type="password" id="password" v-model="userLogin.password" />

          <a href="#" class="forgot">Forgot your password?</a>

          <input type="submit" value="LOGIN" />
          <router-link to="/sign-up" class="sign-up">SIGN UP</router-link>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import BenifitBar from "@/components/BenifitBar.vue";

export default {
  name: "SignInView",
  components: {
    BenifitBar,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const userLogin = reactive({
      email: "",
      password: "",
    });

    const handleSubmit = () => {
      store.dispatch("auth/signInAction", { data: userLogin, router });
    };

    return {
      userLogin,
      handleSubmit,
    };
  },
};
</script>

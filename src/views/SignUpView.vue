<template>
  <main>
    <div class="user-sign-up">
      <div class="wrapper">
        <h1>Sign Up</h1>
        <form action="" id="user_form" @submit.prevent="handleSubmit">
          <label for="user_name">User name</label>
          <input type="text" id="user_name" v-model="userRegister.name" />

          <label for="email">Email</label>
          <input type="text" id="email" v-model="userRegister.email" />

          <label for="tel">Phone Number</label>
          <input type="tel" id="tel" v-model="userRegister.phone" />

          <label for="birthday"
            >Birthday:
            <div class="birthday">
              <select v-model="userRegister.day">
                <option label="Day"></option>
                <option v-for="(day, index) in arrayDay" :key="index">
                  {{ day }}
                </option>
              </select>

              <select v-model="userRegister.month">
                <option label="Month"></option>
                <option v-for="(month, index) in arrayMonth" :key="index">
                  {{ month }}
                </option>
              </select>

              <select style="" v-model="userRegister.year">
                <option label="Year"></option>
                <option v-for="(year, index) in arrayYear" :key="index">
                  {{ year }}
                </option>
              </select>
            </div>
          </label>

          <label for="gender"
            >Gender:
            <select style="" v-model="userRegister.gender">
              <option label="Gender"></option>
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
          </label>

          <label for="address">Address: </label>
          <input
            class="text"
            type="text"
            name="address"
            id="address"
            v-model="userRegister.address"
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="userRegister.password"
          />

          <label for="repeat_password">Repeat Password</label>
          <input
            type="password"
            id="repeat_password"
            v-model="userRegister.repeatPassword"
          />

          <input type="submit" value="SIGN UP" />
          <div>
            If you had account?
            <router-link style="text-decoration: underline" to="/sign-in"
              >SIGN IN</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
import { createArrayNumber } from "../utils/createArrayNumber";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "SignUpView",

  setup() {
    const store = useStore();
    const router = useRouter();
    // lưu object, giá trị tham chiếu, function
    const arrayDay = createArrayNumber(1, 31);
    const arrayMonth = createArrayNumber(1, 12);
    const arrayYear = createArrayNumber(1970, 2024);

    const userRegister = reactive({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone: "",
      day: "",
      month: "",
      year: "",
      gender: "true",
      address: "",
    });

    // gửi dữ liệu lên API
    const handleSubmit = () => {
      if (userRegister.password === userRegister.repeatPassword) {
        //nếu đúng thì call api
        const data = {
          name: userRegister.name,
          email: userRegister.email,
          password: userRegister.password,
          phone: userRegister.phone,
          birthday: `${userRegister.day}/${userRegister.month}/${userRegister.year}`,
          gender: userRegister.gender === "true",
          address: userRegister.address,
        };
        store.dispatch("auth/registerAction", { data, router });
      } else {
        alert("Mật khẩu không khớp");
      }
    };

    return {
      arrayDay,
      arrayMonth,
      arrayYear,
      userRegister,
      handleSubmit,
    };
  },
};
</script>
<style lang="scss">
label[for="birthday"],
label[for="gender"] {
  margin: calc(var(--pd-item) / 2) 0 var(--pd-item);
}

.birthday {
  display: inline-block;
  width: calc(100% - 7rem);
}

select {
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  padding: 8px 0;

  &:first-child,
  &:nth-child(2) {
    margin-right: 2rem;
  }
}
</style>

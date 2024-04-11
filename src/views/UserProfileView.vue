<template>
  <main>
    <BenifitBar></BenifitBar>

    <div class="user-profile">
      <div class="wrapper">
        <div class="tabs">
          <div
            class="tab-item"
            @click="openTab('tab1')"
            :class="{ active: activeTab === 'tab1' }"
          >
            <i class="fa-solid fa-user"></i>
            <h1>My Profile</h1>
          </div>
          <div
            class="tab-item"
            @click="openTab('tab2')"
            :class="{ active: activeTab === 'tab2' }"
          >
            <i class="fa-solid fa-basket-shopping"></i>
            <h1>My Purchase</h1>
          </div>
          <div class="line" :class="{ active: activeTab === 'tab2' }"></div>
        </div>

        <!-- Tab content -->
        <div class="tab-content">
          <div class="tab-pane" :class="{ active: activeTab === 'tab1' }">
            <h2>Manage and protect your account</h2>

            <div class="user-profile-detail">
              <div>Name</div>
              <div><input type="text" :value="userLogin.user.name" /></div>
              <div>Email</div>
              <div>{{ userLogin.user.email }}</div>
              <div>Phone Number</div>
              <div>{{ userLogin.user.phone }}</div>
              <div>Address</div>
              <div>{{ userLogin.user.address }}</div>
              <div>Gender</div>
              <div>
                <label for="male"
                  ><input
                    id="male"
                    type="radio"
                    value="male"
                    checked
                  />Male</label
                >
                <label for="female"
                  ><input
                    id="female"
                    type="radio"
                    value="female"
                  />Female</label
                >
                <label for="other"
                  ><input id="other" type="radio" value="other" />Other</label
                >
              </div>
              <div></div>
              <div>
                <button class="base-btn">Save</button>
              </div>
            </div>

            <div class="log-out">
              <button class="base-btn" @click="handleLogout">Log Out</button>
            </div>
          </div>
          <div class="tab-pane" :class="{ active: activeTab === 'tab2' }">
            <h2>Manage your purchase</h2>
            <p>Total {{ orderList.length }} orders</p>

            <div class="purchase">
              <ul class="purchase-list">
                <li
                  class="purchase-item"
                  v-for="(order, idx) in orderList"
                  :key="idx"
                >
                  Date: 2/4/2024
                  <div v-for="(cart, idx) in order.cart.cartList" :key="idx">
                    <div>
                      <div class="image-cover">
                        <img :src="cart.image" alt="" />
                      </div>
                      <p>{{ cart.name }}</p>
                    </div>
                    <div>
                      <span style="text-decoration: line-through"
                        >${{ cart.originalPrice }}</span
                      >
                      <span>${{ cart.salePrice }}</span>
                    </div>
                  </div>
                  <div><span>Shipping fee:</span> <span>$5</span></div>

                  <div><span>Total:</span> <span>$77</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import { reactive } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
// import { useRouter } from "vue-router";

import BenifitBar from "@/components/BenifitBar.vue";

export default {
  name: "UserProfileView",
  components: { BenifitBar },
  setup() {
    const store = useStore();
    const router = useRouter();

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    const userLogin = computed(() => store.state.auth.userLogin);

    store.dispatch("orders/getOrderListAction", userLogin.value.user.id);
    const orderList = computed(() => store.state.orders.orderList);

    const activeTab = ref("tab1");

    const openTab = (tab) => {
      activeTab.value = tab;
    };

    const handleLogout = () => {
      localStorage.removeItem("userLogin");
      localStorage.removeItem("cartList");
      store.dispatch("auth/loadUserLoginFromLocalStorageAction");
      router.push("/");
    };

    return {
      userLogin,
      // cartList,
      handleLogout,
      activeTab,
      openTab,
      orderList,
    };
  },
};
</script>
<style lang="scss">
.user-profile {
  .tabs {
    display: flex;
    position: relative;

    .tab-item {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
      opacity: 0.6;

      i {
        font-size: 3rem;
        padding-top: 5px;
        margin-right: 8px;
      }

      &.active {
        opacity: 1;
      }
    }

    .line {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 6px;
      border-radius: 15px;
      background-color: var(--primary-clr);
      transition: all 0.2s ease;

      &.active {
        left: 50%;
      }
    }
  }

  .tab-content {
    .tab-pane {
      padding: var(--pd-inline);
      display: none;
      background-color: rgba(0, 0, 0, 0.05);

      &.active {
        display: block;
      }

      h2 {
        margin-bottom: var(--m-item);
      }

      .user-profile-detail {
        display: grid;
        gap: var(--m-item);
        grid-template-columns: repeat(2, 1fr);
        max-width: 35rem;
        margin: 0 auto;
        & > div:first-child {
          line-height: 3.8rem;
        }

        label {
          margin-right: 1rem;
        }
        input {
          padding: 8px;
          font-size: 1.6rem;

          &[type="radio"] {
            margin-right: 4px;
          }
        }
        div:last-child {
          display: flex;
          justify-content: end;
          .base-btn {
            width: 10rem;
            background-color: var(--btn-clr-primary-hover);
            color: var(--secondary-clr);
          }
        }
      }

      .purchase-item {
        margin-top: var(--pd-inline);
        border-bottom: var(--border);
        & > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--m-item);

          div {
            display: flex;
            align-items: center;
            gap: var(--pd-inline);
            .image-cover {
              width: 15rem;
              border-radius: var(--border-radius);
              overflow: hidden;
              img {
                aspect-ratio: 1 / 1;
              }
            }
          }
        }
      }
    }
  }

  .log-out {
    display: flex;
    margin-top: var(--m-item);
    justify-content: center;

    .base-btn {
      margin: var(--m-item);
      width: min(100%, 25rem);
    }
  }
}
</style>

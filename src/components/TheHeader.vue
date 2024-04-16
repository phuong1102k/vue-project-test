<template>
  <!-- header -->
  <header class="header">
    <div class="wrapper">
      <div class="navbar-pc">
        <!-- logo -->
        <router-link to="/" class="logo">
          <img
            src="/images/logo/Themea_Logo-Brand_Black.svg"
            alt="Themea_logo"
          />
        </router-link>

        <!-- nav-list -->
        <ul class="nav-list">
          <li class="nav">
            <router-link to="/products" class="shop"
              >Shop<i class="fa-solid fa-angle-down"></i
            ></router-link>

            <div class="nav-detail">
              <span class="subnav-tip"></span>
              <div class="detail">
                <ul class="tabs">
                  <!-- body lotion -->
                  <li v-for="(productType, idx) in typeList" :key="idx">
                    <router-link to="/products" id="tab1"
                      ><i class="fa-solid fa-angle-right"></i>
                      {{ productType.name }}
                    </router-link>
                  </li>
                </ul>

                <div class="main-menu">
                  <div class="image-cover">
                    <img
                      src="/images/product/Collection_Product-Brand-Bartlett-Pear-min.jpg"
                      alt="bundle"
                    />
                  </div>

                  <div class="base-banner-caption">
                    <p class="base-subtitle">Combine the Great</p>

                    <h1 class="base-title">Bundle & save</h1>

                    <a href="#" class="base-btn">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav">
            <a href="#" class="collection"
              >Collections<i class="fa-solid fa-angle-down"></i
            ></a>

            <!-- collection detail -->
            <div class="nav-detail">
              <span class="subnav-tip"></span>

              <ul class="main-menu-list">
                <li class="main-menu">
                  <a href="#" class="base-name">Trending</a>

                  <ul class="base-list">
                    <li class="base">
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i>New Arrivals</a
                      >
                    </li>

                    <li class="base">
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i>Bundle and
                        Save</a
                      >
                    </li>

                    <li class="base">
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i>Best Sellers</a
                      >
                    </li>

                    <li class="base">
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i>Summer Sale</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="main-menu">
                  <a href="#" class="base-name">Product type</a>

                  <ul class="base-list">
                    <li
                      class="base"
                      v-for="(productType, idx) in typeList"
                      :key="idx"
                    >
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i
                        >{{ productType.name }}</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="main-menu">
                  <a href="#" class="base-name">Skintype</a>

                  <ul class="base-list">
                    <li
                      class="base"
                      v-for="(skinType, idx) in typeSkinList"
                      :key="idx"
                    >
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i
                        >{{ skinType.name }}</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="main-menu">
                  <a href="#" class="base-name">Ingredients</a>

                  <ul class="base-list">
                    <li
                      class="base"
                      v-for="(ingredientType, idx) in typeIngredientList"
                      :key="idx"
                    >
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i
                        >{{ ingredientType.name }}</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="main-menu">
                  <div class="image-cover">
                    <img
                      src="/images/product/Collection_Product-Brand-Bartlett-Pear-min.jpg"
                      alt="bundle"
                    />
                  </div>

                  <div class="base-banner-caption">
                    <p class="base-subtitle">Combine the Great</p>

                    <h1 class="base-title">Bundle & save</h1>

                    <a href="#" class="base-btn">Shop now</a>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav">
            <a href="#" class="more"
              >More<i class="fa-solid fa-angle-down"></i
            ></a>

            <!-- more detail -->
            <ul class="subnav-list">
              <span class="subnav-tip"></span>
              <li class="subnav">
                <router-link to="/about">
                  <i class="fa-solid fa-angle-right"></i>About</router-link
                >
              </li>

              <li class="subnav">
                <a href="#"><i class="fa-solid fa-angle-right"></i>Contact</a>
              </li>

              <li class="subnav">
                <a href="#"><i class="fa-solid fa-angle-right"></i>FAQ</a>
              </li>

              <li class="subnav">
                <a href="#"><i class="fa-solid fa-angle-right"></i>Lookbook</a>
              </li>

              <li class="subnav">
                <a href="#"><i class="fa-solid fa-angle-right"></i>Reviews</a>
              </li>
            </ul>
          </li>
        </ul>

        <!-- search -->
        <TheMainSearch></TheMainSearch>

        <!-- user -->
        <span class="user">
          <router-link to="/sign-in" v-if="!userLogin.user"
            ><span>
              <i class="fa-regular fa-circle-user"></i>Login</span
            ></router-link
          >
          <router-link to="/user-profile" v-else>
            <i class="fa-solid fa-circle-user"></i>
          </router-link>
        </span>

        <TheCart :cart="cartList" :userInfo="userLogin"></TheCart>
      </div>

      <div class="navbar-mobile">
        <div class="left">
          <label class="nav__bars-btn" for="nav-mobile-input">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="svg-inline--fa fa-bars fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </label>
          <input class="nav__input" type="checkbox" id="nav-mobile-input" />

          <div class="navbar">
            <TheMainSearch></TheMainSearch>

            <ul class="nav-list">
              <li class="nav" @click="openTab('tab01')">
                <a class="tab-button">
                  <a class="shop">Shop</a>
                  <span class="more-button"
                    ><i class="fa-solid fa-angle-right"></i
                  ></span>
                </a>
                <div
                  class="detail-mobile"
                  :class="{ open: activeTab == 'tab01' }"
                >
                  <ul class="tabs">
                    <!-- body lotion -->
                    <li>
                      <a href="#tab1" id="tab1"
                        ><i class="fa-solid fa-angle-right"></i> Body lotion
                      </a>
                    </li>
                    <!-- body wash -->
                    <li>
                      <a href="#tab2" id="tab2"
                        ><i class="fa-solid fa-angle-right"></i> Body wash
                      </a>
                    </li>
                    <!-- face oil -->
                    <li>
                      <a href="#tab3" id="tab3"
                        ><i class="fa-solid fa-angle-right"></i> Face oil
                      </a>
                    </li>

                    <li>
                      <a href="#tab4" id="tab4"
                        ><i class="fa-solid fa-angle-right"></i> Perfume
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav" @click="openTab('tab02')">
                <a class="tab-button">
                  <a class="shop">Collections</a>
                  <span class="more-button"
                    ><i class="fa-solid fa-angle-right"></i
                  ></span>
                </a>
                <div
                  class="detail-mobile"
                  :class="{ open: activeTab == 'tab02' }"
                >
                  <ul class="tabs collection">
                    <!-- trending -->
                    <li @click="openSubTab('subTab1')">
                      <a><i class="fa-solid fa-angle-right"></i> Trending </a>
                      <div
                        class="subtab"
                        :class="{ active: activeSubTab === 'subTab1' }"
                      >
                        <ul class="subtab-list">
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>New Arrivals
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Bundle and
                            Save
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Best Sellers
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Summer Sale
                          </li>
                        </ul>
                      </div>
                    </li>
                    <!-- Product Type -->
                    <li @click="openSubTab('subTab2')">
                      <a
                        ><i class="fa-solid fa-angle-right"></i> Product Type
                      </a>

                      <div
                        class="subtab"
                        :class="{ active: activeSubTab === 'subTab2' }"
                      >
                        <ul class="subtab-list">
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Body Lotion
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Body Wash
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Face Oil
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Perfume
                          </li>
                        </ul>
                      </div>
                    </li>
                    <!-- skin type -->
                    <li @click="openSubTab('subTab3')">
                      <a><i class="fa-solid fa-angle-right"></i> Skin Type </a>

                      <div
                        class="subtab"
                        :class="{ active: activeSubTab === 'subTab3' }"
                      >
                        <ul class="subtab-list">
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Normal
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Dry Skin
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Oily
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Sensitive
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>All Skin
                            Types
                          </li>
                        </ul>
                      </div>
                    </li>
                    <!-- ingredients -->
                    <li @click="openSubTab('subTab4')">
                      <a
                        ><i class="fa-solid fa-angle-right"></i> Ingredients
                      </a>

                      <div
                        class="subtab"
                        :class="{ active: activeSubTab === 'subTab4' }"
                      >
                        <ul class="subtab-list">
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Lemon
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>White Peach
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Orange
                          </li>
                          <li class="subtab-list-item">
                            <i class="fa-solid fa-angle-right"></i>Summer Lily
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav" @click="openTab('tab03')">
                <a class="tab-button">
                  <a class="more-title">More</a>
                  <span class="more-button"
                    ><i class="fa-solid fa-angle-right"></i
                  ></span>
                </a>
                <div
                  class="detail-mobile"
                  :class="{ open: activeTab == 'tab03' }"
                >
                  <ul class="subnav-list">
                    <li class="subnav">
                      <router-link to="/about">
                        <i class="fa-solid fa-angle-right"></i
                        >About</router-link
                      >
                    </li>

                    <li class="subnav">
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i>Contact</a
                      >
                    </li>

                    <li class="subnav">
                      <a href="#"><i class="fa-solid fa-angle-right"></i>FAQ</a>
                    </li>

                    <li class="subnav">
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i>Lookbook</a
                      >
                    </li>

                    <li class="subnav" style="padding-bottom: 0">
                      <a href="#"
                        ><i class="fa-solid fa-angle-right"></i>Reviews</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- logo -->
        <router-link to="/" class="logo">
          <img
            src="/images/logo/Themea_Logo-Brand_Black.svg"
            alt="Themea_logo"
          />
        </router-link>

        <div class="right">
          <!-- user -->
          <span class="user">
            <router-link to="/sign-in" v-if="!userLogin.user"
              ><span>
                <i class="fa-regular fa-circle-user"></i>Login</span
              ></router-link
            >
            <router-link to="/user-profile" v-else>
              <i class="fa-solid fa-circle-user"></i>
            </router-link>
          </span>
          <div></div>
          <!-- cart -->
          <TheCart :cart="cartList" :userInfo="userLogin"></TheCart>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import TheMainSearch from "@/components/TheMainSearch.vue";
import TheCart from "@/components/TheCart.vue";

// import { useRouter } from "vue-router";

export default {
  name: "TheHeader",
  components: {
    TheMainSearch,
    TheCart,
  },

  beforeCreate() {
    // if ("detail" in this.cartList.value) {
    //   this.cartListDetail.value = this.cartList.value[0].detail.cartList;
    // }
  },

  setup() {
    const store = useStore();
    // const router = useRouter();
    // const cartTotalQuatity = ref(0);

    store.dispatch("types/getTypeIngredientListAction");
    const typeIngredientList = computed(
      () => store.state.types.typeIngredientList
    );

    store.dispatch("types/getTypeListAction");
    const typeList = computed(() => store.state.types.typeList);

    store.dispatch("types/getTypeSkinListAction");
    const typeSkinList = computed(() => store.state.types.typeSkinList);

    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    const userLogin = computed(() => store.state.auth.userLogin);

    if (userLogin.value.user) {
      store.dispatch("carts/getCartListAction", userLogin.value.user.id);
    }

    const cartList = computed(() => store.state.carts.cartList);

    const activeTab = ref("tab01");

    const openTab = (tab) => {
      activeTab.value = tab;
    };

    const activeSubTab = ref("subTab1");
    const openSubTab = (tab) => {
      activeSubTab.value = tab;
    };

    return {
      userLogin,
      typeIngredientList,
      typeList,
      typeSkinList,
      cartList,

      activeTab,
      openTab,
      activeSubTab,
      openSubTab,
    };
  },
};
</script>
<style scoped lang="scss">
.tabs.collection .subtab {
  max-height: 0;
  overflow: hidden;

  &.active {
    max-height: unset;
  }

  .subtab-list-item {
    padding-left: 1.6rem;
  }
}

.right {
  display: flex;
  gap: 5px;
}

.user {
  cursor: pointer;
  border-radius: 99999px;

  span {
    margin-left: 5px;
  }
}
</style>

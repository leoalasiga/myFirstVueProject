<template>
  <div class="app-container">
    <!-- 顶部header -->
    <mt-header fixed title="Sup-Hr">
      <!-- <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>-->
      <!-- <mt-button @click="handleClose"></mt-button> -->
      <!-- </router-link>
      <mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
    <!-- 中间路由的route-view区 -->
    <transition mode="out-in">
      <router-view />
    </transition>
    <!-- 底部tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  position: absolute;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>


<template>
  <div class="app-container">
    <!-- 顶部header -->
    <mt-header fixed title="Sup-Hr">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        <!-- <mt-button @click="handleClose"></mt-button> -->
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 中间路由的route-view区 -->
    <router-view />
    <!-- 底部tabbar区域 -->
<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fixed:true,

    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>


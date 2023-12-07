<script setup lang="ts">

defineProps({
  activeId: {
    type: Number,
    default: 1
  }
});
const logout = () => {
  PassportApi.logout().then(() => {
    ElMessage.success('退出登录'); 
    useUserStore().accessToken = '';
    useUserStore().refreshToken = '';
    window.location.reload();
  });
};
</script>

<template>
  <top-bar>
    <template #left>
      <template v-if="useUserStore().isLogin">
        <top-bar-item class="text-rose-600"><a href="/login">欢迎您，{{ useUserStore().userInfo.username }}</a></top-bar-item>
        <top-bar-item><button @click.prevent="logout">退出</button></top-bar-item>
      </template>
      <template v-else>
        <top-bar-item class="text-rose-600"><a href="/login">亲，请登录</a></top-bar-item>
        <top-bar-item><a href="/login">免费注册</a></top-bar-item>
      </template>
    </template>
    <template #right>
    </template>
  </top-bar>
  <tab-menu>
    <template #left>
      <tab-menu-item to="/" :active="activeId === 1" title="首页" src="/src/assets/svg/home.svg"
        hover-src="/src/assets/svg/home-hover.svg" />
      <tab-menu-item to="/judicial" :active="activeId === 2" title="司法拍卖" src="/src/assets/svg/judicial.svg"
        hover-src="/src/assets/svg/judicial-hover.svg" />
      <tab-menu-item to="/rare-goods" :active="activeId === 4" title="珍贵好物" src="/src/assets/svg/welfare.svg"
        hover-src="/src/assets/svg/welfare-hover.svg" />
      <tab-menu-item to="/transaction-services" :active="activeId === 5" title="交易服务" src="/src/assets/svg/heart.svg"
        hover-src="/src/assets/svg/heart-hover.svg" />
      <tab-menu-item to="/help-center" :active="activeId === 6" title="帮助中心" src="/src/assets/svg/question.svg"
        hover-src="/src/assets/svg/question-hover.svg" />
    </template>
    <template #right>
    </template>
  </tab-menu>
</template>

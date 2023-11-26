<script setup lang="ts">

defineProps({
  activeId: {
    type: Number,
    default: 1
  }
});
</script>

<template>
  <top-bar>
    <template #left>
      <top-bar-item class="text-rose-600">亲，请登录</top-bar-item>
      <top-bar-item>免费注册</top-bar-item>
    </template>
    <template #right>
      <top-bar-item>购物车</top-bar-item>
    </template>
  </top-bar>
  <tab-menu>
    <template #left>
      <tab-menu-item to="/" :active="activeId===1" title="首页" src="src/assets/svg/home.svg" hover-src="src/assets/svg/home-hover.svg" />
      <tab-menu-item to="/judicial" :active="activeId===2" title="司法拍卖" src="src/assets/svg/judicial.svg" hover-src="src/assets/svg/judicial-hover.svg" />
      <tab-menu-item to="/asset-trading" :active="activeId===3" title="资产交易" src="src/assets/svg/hammer.svg" hover-src="src/assets/svg/hammer-hover.svg" />
      <tab-menu-item to="/rare-goods" :active="activeId===4" title="珍贵好物" src="src/assets/svg/welfare.svg" hover-src="src/assets/svg/welfare-hover.svg" />
      <tab-menu-item to="/transaction-services" :active="activeId===5" title="交易服务" src="src/assets/svg/heart.svg" hover-src="src/assets/svg/heart-hover.svg" />
      <tab-menu-item to="/help-center" :active="activeId===6" title="帮助中心" src="src/assets/svg/question.svg" hover-src="src/assets/svg/question-hover.svg" />
    </template>
    <template #right>
      <tab-menu-item title="我的" />
    </template>
  </tab-menu>
</template>

<script setup lang="ts">


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
      <tab-menu-item>首页</tab-menu-item>
      <tab-menu-item>司法拍卖</tab-menu-item>
      <tab-menu-item>资产交易</tab-menu-item>
      <tab-menu-item>珍贵好物</tab-menu-item>
    </template>
    <template #right>
      <tab-menu-item>我的</tab-menu-item>
    </template>
  </tab-menu>
  <a href="#"
    class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
    <div class="flex items-center space-x-3">
      <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
      <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
    </div>
    <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.
    </p>
  </a>
</template>

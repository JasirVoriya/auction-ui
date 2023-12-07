<script setup lang="ts">
const tagIndex = ref('0');
</script>
<template>
  <div class="min-w-full min-h-screen">
    <div class="w-screen h-[100px] bg-rose-500 flex items-center">
      <container-box class="flex items-center justify-between">
        <a href="/">
          <img src="@/assets/svg/hammer.svg" class="w-20 h-20" />
        </a>
        <span class="text-white text-2xl font-semibold">拍卖平台</span>
      </container-box>
    </div>
    <container-box>
      <div class="flex items-center justify-center">
        <nut-tabs v-model="tagIndex" title-scroll>
          <nut-tab-pane pane-key="0" title="个人中心">
            <profile />
          </nut-tab-pane>
          <nut-tab-pane pane-key="2" title="钱包">
            <wallet />
          </nut-tab-pane>
          <nut-tab-pane pane-key="3" title="账号设置">
            <account-settings />
          </nut-tab-pane>
        </nut-tabs>
      </div>
    </container-box>
  </div>
</template>
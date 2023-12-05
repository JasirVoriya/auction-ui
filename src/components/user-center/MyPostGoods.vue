<script setup lang="ts">
import { My } from '@nutui/icons-vue-taro';
const tabIndex = ref('0');
</script>
<template>
  <div class="flex px-10 py-8 items-center justify-between border border-gray-300 m-5">
    <div class="relative">
      <nut-avatar size="150" class=" overflow-hidden">
        <img v-if="useUserStore().userInfo.avatar" :src="useUserStore().userInfo.avatar" />
        <My v-else size="100" />
      </nut-avatar>
    </div>
    <div>
      <button class=" text-gray-500 font-light border-[1px] border-gray-500 py-1 px-6 hover:bg-gray-100">
        发布拍品
      </button>
    </div>
  </div>
  <div>
    <el-tabs v-model="tabIndex" tab-position="left">
      <el-tab-pane label="全部拍品" name="0">
        <div class="px-10">
          <order-list />
        </div>
      </el-tab-pane>
      <el-tab-pane label="待交保" name="1">
        <div class="px-10">
          <order-list />
        </div>
      </el-tab-pane>
      <el-tab-pane label="待开拍" name="2">
        <div class="px-10">
          <order-list />
        </div>
      </el-tab-pane>
      <el-tab-pane label="竞价中" name="3">
        <div class="px-10">
          <order-list />
        </div>
      </el-tab-pane>
      <el-tab-pane label="已结束" name="4">
        <div class="px-10">
          <order-list />
        </div>
      </el-tab-pane>
      <el-tab-pane label="已拍下" name="5">
        <div class="px-10">
          <order-list />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
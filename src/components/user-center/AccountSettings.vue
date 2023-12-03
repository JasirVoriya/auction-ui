<script setup lang="ts">
const tagIndex = ref('1');
</script>
<template>

  <el-tabs v-model="tagIndex" class="">
    <el-tab-pane label="修改用户名" name="1">
      <update-username-form />
    </el-tab-pane>
    <el-tab-pane label="邮箱设置" name="2">
      <email-settings />
    </el-tab-pane>
    <el-tab-pane label="修改密码" name="3">
      <update-password-form />
    </el-tab-pane>
  </el-tabs>
</template>
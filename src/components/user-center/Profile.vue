<script setup lang="ts">
import { My } from '@nutui/icons-vue-taro';
const cutImage = (url: String) => {
  ProfileApi.updateUserAvatar({ avatar: url }).then(() => {
    useUserStore().userInfo.avatar = url;
    ElMessage.success('修改成功');
  });
};
const updateGender = (sex: Number) => {
  ProfileApi.updateUserSex({ sex: sex }).then(() => ElMessage.success('修改成功'));
}
const tabIndex = ref('0');
const avatarCropperRef = ref();
</script>
<template>
  <div class="flex pl-10 items-center border border-gray-300 m-5">
    <div class="relative">
      <div class=" opacity-0 hover:opacity-100 absolute z-10">
        <nut-avatar-cropper ref="avatarCropperRef" @confirm="cutImage">
          <nut-avatar size="150" class=" overflow-hidden">
            <img v-if="useUserStore().userInfo.avatar" :src="useUserStore().userInfo.avatar" />
            <My v-else size="100" />
          </nut-avatar>
          <template #toolbar>
            <div class="toolbar">
              <nut-button type="primary" @click="avatarCropperRef.cancel()">取消</nut-button>
              <nut-button type="primary" @click="avatarCropperRef.reset()">重置</nut-button>
              <nut-button type="primary" @click="avatarCropperRef.rotate()">旋转</nut-button>
              <nut-button type="primary" @click="avatarCropperRef.confirm()">确认</nut-button>
            </div>
          </template>
        </nut-avatar-cropper>
      </div>
      <nut-avatar size="150" class=" overflow-hidden">
        <img v-if="useUserStore().userInfo.avatar" :src="useUserStore().userInfo.avatar" />
        <My v-else size="100" />
      </nut-avatar>
    </div>
    <div class="flex gap-4 p-10 mt-5">
      <div class="flex flex-col items-end text-gray-600">
        <span class="mb-2 font-semibold">用户名：</span>
        <span class="mb-2 font-semibold">用户邮箱：</span>
        <span class="mb-2 font-semibold">性别：</span>
      </div>
      <div class="flex flex-col">
        <span class="mb-2 text-red-600 font-bold">{{ useUserStore().userInfo.username }}</span>
        <span class="mb-2 text-red-600 font-bold">{{ useUserStore().userInfo.email }}</span>
        <div class="mb-2">
          <label class="inline-flex items-center">
            <input v-model="useUserStore().userInfo.sex" type="radio" class="form-radio focus:ring-0 text-rose-600"
              name="gender" :value="0" @click="updateGender(0)">
            <span class="ml-2">未知</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="useUserStore().userInfo.sex" type="radio" class="form-radio focus:ring-0 text-rose-600"
              name="gender" :value="1" @click="updateGender(1)">
            <span class="ml-2">男</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="useUserStore().userInfo.sex" type="radio" class="form-radio focus:ring-0 text-rose-600"
              name="gender" :value="2" @click="updateGender(2)">
            <span class="ml-2">女</span>
          </label>
        </div>
      </div>
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
<script setup lang="ts">
const email = ref('');
const code = ref('');
const password = ref('');
const verifyPassword = ref('');
const getCode = (event: MouseEvent) => {
  console.log('获取验证码');
  const target = event.target as HTMLButtonElement;
  target.disabled = true;
  // 60s倒计时
  const countDown = () => {
    let time = 60;
    const timer = setInterval(() => {
      time--;
      target.innerText = `${time}s`;
      if (time === 0) {
        clearInterval(timer);
        target.disabled = false;
        target.innerText = '获取验证码';
      }
    }, 1000);
  }
  countDown();
  CommonApi.sendChangePasswordCode(useUserStore().userInfo.email).then(() => ElMessage.success('验证码已发送'));
};
const submit = () => {
  //检查密码是否一致
  if (password.value !== verifyPassword.value) {
    ElMessage.error('两次密码不一致');
    return;
  }
  PassportApi.changePassword(useUserStore().userInfo.email, code.value, password.value).then(res => {
    ElMessage.success('修改成功');
    PassportApi.logout().then(() => {
      ElMessage.success('退出登录');
      useUserStore().accessToken = '';
      useUserStore().refreshToken = '';
      router.push({ path: '/' });
    });
  });
}
</script>
<template>
  <div class="flex gap-4 p-10 mt-5 border border-gray-300 shadow-md justify-center">
    <div class="flex flex-col gap-4">
      <span class="text-red-600 font-bold"><span class="mb-2 font-semibold　text-gray-600">用户邮箱：</span>{{
        useUserStore().userInfo.email }}</span>
      <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9 mt-3">
        <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600"
          for="code-for-change-password">
          验证码
        </label>
        <input type="text" class="focus:ring-0 border-0 bg-transparent 
            pl-1 w-36
          placeholder:text-slate-400 placeholder:text-sm 
          text-black text-sm
          caret-rose-600" placeholder="请输入验证码" v-model="code" name="code" id="code-for-change-password" />
        <button @click.prevent="getCode" class="flex justify-center items-center w-20 rounded-r-xl 
          text-gray-500 text-xs
          hover:text-rose-500
            disabled:cursor-not-allowed disabled:hover:text-gray-500">
          获取验证码
        </button>
      </div>
      <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9 mt-3">
        <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600" for="password">
          密码
        </label>
        <input type="password" class="focus:ring-0 border-0 bg-transparent 
            pl-1 w-55
          placeholder:text-slate-400 placeholder:text-sm 
          text-black text-sm
          caret-rose-600" placeholder="请输入密码" v-model="password" name="password" id="password" />
      </div>
      <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9 mt-3">
        <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600"
          for="verify-password">
          密码
        </label>
        <input type="password" class="focus:ring-0 border-0 bg-transparent 
            pl-1 w-55
          placeholder:text-slate-400 placeholder:text-sm 
          text-black text-sm
          caret-rose-600" placeholder="请确认密码" v-model="verifyPassword" name="verify-password" id="verify-password" />
      </div>
      <button @click.prevent="submit" class="mt-5 w-72 h-9 px-4 py-1
          bg-rose-500
          text-sm font-semibold rounded-xl border border-rose-200 text-white
          hover:bg-rose-600 hover:border-transparent 
          active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-1">
        确认修改
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from '@/router';

const email = ref('');
const code = ref('');
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
  CommonApi.sendLoginCode(email.value).then(()=>ElMessage.success('验证码已发送'));
};
const login = () => {
  PassportApi.codeLogin(email.value, code.value).then(res => {
    ElMessage.success('登录成功');
    console.log(res);
    // 保存token
    useUserStore().accessToken = res.accessToken;
    useUserStore().refreshToken = res.refreshToken;
    // 保存用户信息
    ProfileApi.getUserProfile().then(res => {
      useUserStore().userInfo = res;
      // 跳转到首页
      router.push({ path: '/' });
    });
  });
};
</script>
<template>
  <div class="flex items-center justify-center mt-10">
    <form>
      <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9">
        <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600" for="email">
          邮箱
        </label>
        <input type="email" class="focus:ring-0 border-0 bg-transparent 
          pl-1 w-55
        placeholder:text-slate-400 placeholder:text-sm 
        text-black text-sm
        caret-rose-600" placeholder="请输入邮箱" v-model="email" name="email" id="email" />
      </div>
      <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9 mt-3">
        <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600" for="code">
          验证码
        </label>
        <input type="text" class="focus:ring-0 border-0 bg-transparent 
          pl-1 w-36
        placeholder:text-slate-400 placeholder:text-sm 
        text-black text-sm
        caret-rose-600" placeholder="请输入验证码" v-model="code" name="code" id="code" />
        <button @click.prevent="getCode" class="flex justify-center items-center w-20 rounded-r-xl 
          text-gray-500 text-xs
          hover:text-rose-500
            disabled:cursor-not-allowed disabled:hover:text-gray-500">
          获取验证码
        </button>
      </div>
      <div class="pt-3">
        <span class="text-xs text-black before:content-['*'] before:text-red-500">
          未注册的邮箱会自动创建账号
        </span>
      </div>
      <button @click.prevent="login" class="mt-5 w-72 h-9 px-4 py-1
        bg-rose-500
        text-sm font-semibold rounded-xl border border-rose-200 text-white
        hover:bg-rose-600 hover:border-transparent 
        active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-1">
        登录/注册
      </button>
    </form>
  </div>
  <div class="flex mt-7">
    <a class="px-1" href="#">
      <span class="text-xs text-slate-500">QQ登录</span>
    </a>
    <a class="px-1" href="#">
      <span class="text-xs text-slate-500">支付宝登录</span>
    </a>
  </div>
</template>@/router/router
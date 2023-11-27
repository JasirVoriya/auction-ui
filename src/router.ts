import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AssetTradingPage from '@/pages/AssetTradingPage.vue'
import JudicialPage from '@/pages/JudicialPage.vue'
import RareGoodsPage from '@/pages/RareGoodsPage.vue'
import TransactionServicesPage from '@/pages/TransactionServicesPage.vue'
import HelpCenterPage from '@/pages/HelpCenterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: '拍卖平台',
    },
  },
  {
    path: '/judicial',
    component: JudicialPage,
    meta: {
      title: '司法拍卖',
    },
  },
  {
    path: '/asset-trading',
    component: AssetTradingPage,
    meta: {
      title: '资产交易',
    },
  },
  {
    path: '/rare-goods',
    component: RareGoodsPage,
    meta: {
      title: '珍贵好物',
    },
  },
  {
    path: '/transaction-services',
    component: TransactionServicesPage,
    meta: {
      title: '珍贵好物',
    },
  },
  {
    path: '/help-center',
    component: HelpCenterPage,
    meta: {
      title: '帮助中心',
    },
  },
  {
    path: '/login',
    component: LoginPage,
    meta: {
      title: '登录',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  if (to.meta.title) { // 判断是否有标题
    document.title = to.meta.title;
  }
});

export default router

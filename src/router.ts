import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AssetTradingPage from '@/pages/AssetTradingPage.vue'
import JudicialPage from '@/pages/JudicialPage.vue'
import RareGoodsPage from '@/pages/RareGoodsPage.vue'
import TransactionServicesPage from '@/pages/TransactionServicesPage.vue'
import HelpCenterPage from '@/pages/HelpCenterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SwiperAndGoodsList from '@/pages/SwiperAndGoodsList.vue'
import GoodsDetailPage from '@/pages/GoodsDetailPage.vue'
import UserCenterPage from '@/pages/UserCenterPage.vue'
import TestPage from '@/pages/TestPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: '拍卖平台',
    },
    children: [
      {
        path:'',
        component: SwiperAndGoodsList,
      }
    ]
  },
  {
    path: '/judicial',
    component: JudicialPage,
    meta: {
      title: '司法拍卖',
    },
    children: [
      {
        path:'',
        component: SwiperAndGoodsList,
      }
    ]
  },
  {
    path: '/asset-trading',
    component: AssetTradingPage,
    meta: {
      title: '资产交易',
    },
    children: [
      {
        path:'',
        component: SwiperAndGoodsList,
      }
    ]
  },
  {
    path: '/rare-goods',
    component: RareGoodsPage,
    meta: {
      title: '珍贵好物',
    },
    children: [
      {
        path:'',
        component: SwiperAndGoodsList,
      },
      {
        path:':goodsId',
        component: GoodsDetailPage,
        props: true,
      }
    ]
  },
  {
    path: '/transaction-services',
    component: TransactionServicesPage,
    meta: {
      title: '交易服务',
    },
    children: [
      {
        path:'',
        component: SwiperAndGoodsList,
      }
    ]
  },
  {
    path: '/help-center',
    component: HelpCenterPage,
    meta: {
      title: '帮助中心',
    },
    children: [
      {
        path:'',
        component: SwiperAndGoodsList,
      }
    ]
  },
  {
    path: '/login',
    component: LoginPage,
    meta: {
      title: '登录',
    },
  },
  {
    path: '/user-center',
    component: UserCenterPage,
    meta: {
      title: '用户中心',
    },
  },
  {
    path: '/test',
    component: TestPage,
    meta: {
      title: '测试',
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

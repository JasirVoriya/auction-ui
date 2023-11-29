<script setup lang="ts">
useStore().category = {
  name: '全部分类',
  link: '/category',
  children: [
    {
      name: '手机',
      link: '/category/phone',
      children: []
    },
    {
      name: '电脑',
      link: '/category/computer',
      children: []
    },
    {
      name: '家电',
      link: '/category/appliance',
      children: []
    },
    {
      name: '生活',
      link: '/category/life',
      children: []
    },
    {
      name: '服饰',
      link: '/category/clothes',
      children: []
    },
    {
      name: '美妆',
      link: '/category/makeup',
      children: []
    },
    {
      name: '运动',
      link: '/category/sport',
      children: []
    },
    {
      name: '汽车',
      link: '/category/car',
      children: []
    },
    {
      name: '图书架',
      link: '/category/book',
      children: []
    },
    {
      name: '医药',
      link: '/category/medicine',
      children: []
    },
    {
      name: '食品',
      link: '/category/food',
      children: []
    },
    {
      name: '家居',
      link: '/category/home',
      children: []
    },
    {
      name: '母婴',
      link: '/category/baby',
      children: []
    },
    {
      name: '玩具刀',
      link: '/category/toy',
      children: []
    },
    {
      name: '数码',
      link: '/category/digital',
      children: []
    },
    {
      name: '宠物',
      link: '/category/pet',
      children: []
    },
    {
      name: '鞋靴',
      link: '/category/shoes',
      children: []
    },
    {
      name: '箱包',
      link: '/category/bag',
      children: []
    },
    {
      name: '钟表',
      link: '/category/watch',
      children: []
    },
    {
      name: '珠宝',
      link: '/category/jewelry',
      children: []
    },
    {
      name: '家具',
      link: '/category/furniture',
      children: []
    },
    {
      name: '家装',
      link: '/category/decoration',
      children: []
    },
    {
      name: '厨具',
      link: '/category/kitchen',
      children: []
    },
    {
      name: '家纺',
      link: '/category/textile',
      children: []
    },
    {
      name: '办公',
      link: '/category/office',
      children: []
    },
    {
      name: '汽车用品',
      link: '/category/car-supplies',
      children: []
    },
    {
      name: '二手商品',
      link: '/category/second-hand',
      children: []
    },
    {
      name: '房产',
      link: '/category/estate',
      children: []
    },
    {
      name: '建材',
      link: '/category/building',
    },
    {
      name: '农资',
      link: '/category/farming',
      children: []
    },
    {
      name: '工具',
      link: '/category/tool',
      children: []
    },
    {
      name: '机械',
      link: '/category/machine',
      children: []
    },
    {
      name: '安防',
      link: '/category/security',
      children: []
    },
    {
      name: '五金',
      link: '/category/hardware',
      children: []
    },
    {
      name: '化工',
      link: '/category/chemical',
      children: []
    },
    {
      name: '橡塑',
      link: '/category/rubber',
      children: []
    },
    {
      name: '纺织',
      link: '/category/textile',
      children: []
    },
    {
      name: '能源',
      link: '/category/energy',
      children: []
    },
    {
      name: '环保',
      link: '/category/environment',
      children: []
    },
    {
      name: '包装',
      link: '/category/packaging',
      children: []
    },
    {
      name: '印刷',
      link: '/category/printing',
      children: []
    },
    {
      name: '办公用品',
      link: '/category/office-supplies',
      children: []
    },
    {
      name: '百货',
      link: '/category/departments',
      children: []
    },
    {
      name: '餐饮',
      link: '/category/catering',
      children: []
    },
    {
      name: '酒店',
      link: '/category/hotel',
      children: []
    },
    {
      name: '旅游',
      link: '/category/travel',
      children: []
    },
    {
      name: '娱乐',
      link: '/category/entertainment',
      children: []
    },
    {
      name: '运动',
      link: '/category/sport',
      children: []
    },
    {
      name: '文化',
      link: '/category/culture',
      children: []
    },
    {
      name: '教育',
      link: '/category/education',
      children: []
    },
    {
      name: '其他',
      link: '/category/other',
      children: []
    },
  ]
}
</script>
<template>
  <header-bar :active-id="1" />
  <banner title="拍卖平台" src="src/assets/svg/home-hover.svg" />
  <search-bar>首页搜索</search-bar>
  <router-view />
</template>

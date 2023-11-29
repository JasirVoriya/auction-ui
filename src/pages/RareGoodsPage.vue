<script setup lang="ts">
useStore().category = {
  name: '珍品主题市场',
  link: '/category/rare',
  children: [
    {
      name: '钻石',
      link: '/category/rare/diamond',
      children: []
    },
    {
      name: '翡翠',
      link: '/category/rare/jade',
      children: []
    },
    {
      name: '瓷器',
      link: '/category/rare/porcelain',
      children: []
    },
    {
      name: '字画',
      link: '/category/rare/painting',
      children: []
    },
    {
      name: '古玩',
      link: '/category/rare/antique',
      children: []
    },
    {
      name: '杂项',
      link: '/category/rare/miscellaneous',
      children: []
    },
    {
      name: '珠宝',
      link: '/category/rare/jewelry',
      children: []
    },
    {
      name: '文玩',
      link: '/category/rare/cultural',
      children: []
    },
    {
      name: '金银',
      link: '/category/rare/gold',
      children: []
    },
    {
      name: '邮票',
      link: '/category/rare/stamp',
      children: []
    },
    {
      name: '纪念币',
      link: '/category/rare/coin',
      children: []
    },
    {
      name: '古董',
      link: '/category/rare/antique',
      children: []
    },
    {
      name: '木器',
      link: '/category/rare/wood',
      children: []
    },
    {
      name: '玉器',
      link: '/category/rare/jade',
      children: []
    },
    {
      name: '陶器',
      link: '/category/rare/pottery',
      children: []
    },
    {
      name: '铜器',
      link: '/category/rare/copper',
      children: []
    },
    {
      name: '竹木牙角',
      link: '/category/rare/bamboo',
      children: []
    },
    {
      name: '漆器',
      link: '/category/rare/lacquer',
      children: []
    },
    {
      name: '瓷器',
      link: '/category/rare/porcelain',
      children: []
    },
    {
      name: '金银器',
      link: '/category/rare/gold',
      children: []
    },
    {
      name: '珠宝玉石',
      link: '/category/rare/jewelry',
      children: []
    },
    {
      name: '文房用品',
      link: '/category/rare/stationery',
      children: []
    },
    {
      name: '古籍善本',
      link: '/category/rare/ancient',
      children: []
    },
    {
      name: '邮票',
      link: '/category/rare/stamp',
      children: []
    },
    {
      name: '钱币',
      link: '/category/rare/coin',
      children: []
    },
    {
      name: '石器',
      link: '/category/rare/stone',
      children: []
    },
    {
      name: '雕塑',
      link: '/category/rare/sculpture',
      children: []
    },
    {
      name: '文玩杂项',
      link: '/category/rare/cultural',
      children: []
    },
    {
      name: '古董',
      link: '/category/rare/antique',
      children: []
    },
    {
      name: '木器',
      link: '/category/rare/wood',
      children: []
    },
    {
      name: '玉器',
      link: '/category/rare/jade',
      children: []
    },
    {
      name: '陶器',
      link: '/category/rare/pottery',
      children: []
    },
    {
      name: '其他',
      link: '/category/rare/others',
    }
  ]
}
</script>
<template>
    <header-bar :active-id="4" />
    <banner title="珍贵好物" src="/src/assets/svg/welfare-hover.svg" />
    <search-bar>珍贵好物</search-bar>
    <router-view />
</template>

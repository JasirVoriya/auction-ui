<script setup lang="ts">
const store = useStore();
const category = store.category;
</script>
<template>
  <div>
    <a :href="category.link" class="text-sm font-bold hover:text-rose-600">{{ category.name }}</a>
    <div class="flex flex-wrap">
      <a v-for="item in category.children" :key="item.name" :href="item.link" class="text-xs hover:text-rose-600 p-1">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>
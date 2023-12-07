<script setup lang="ts">
const store = useStore();
const category = store.category;
</script>
<template>
  <div>
    <a :href="category.link" class="text-xl font-bold hover:text-rose-600">{{ category.name }}</a>
    <div class="flex flex-wrap gap-3 p-4">
      <a v-for="item in category.children" :key="item.name" href="#" class="text-sm hover:text-rose-600">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>
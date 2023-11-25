<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ''
    },
    src: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="flex pt-4">
        <div class="flex mx-auto">
            <img :src="src" class="inline-block h-20 pr-3">
            <div class="inline-block">
                <span class="inline-block pt-3 text-black font-bold text-5xl">{{ title }}</span>
            </div>
        </div>
    </div>
</template>

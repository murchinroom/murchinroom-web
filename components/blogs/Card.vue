<template>
  <div class="min-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:-translate-y-1 duration-300 ">
    <h5 class="min-h-8 min-w-16 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ article?.title }}</h5>
    <p class="min-h-8 min-w-16 font-normal text-gray-700 dark:text-gray-400">{{ article?.description }}</p>
    <span class="min-h-8 min-w-16 font-mono">{{ article?.publishedAt }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  article?: {
    title?: string,
    description?: string,
    publishedAt?: string,
  }
}>()

</script>

<style scoped>

</style>

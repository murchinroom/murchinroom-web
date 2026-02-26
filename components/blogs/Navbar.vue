<template>
  <div>
    <div class="breadcrumb">
      <BlogsBreadcrumb :navigation="navigation ?? []" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData('blogsNavigation',
    () => queryCollectionNavigation('blogs', ['publishedAt'])
);
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>

<template>
  <div>
    <ContentNavigation v-slot="{ navigation }">
      <div class="breadcrumb">
        <BlogsBreadcrumb :navigation="navigation" />
      </div>
    </ContentNavigation>
  </div>
</template>

<script>
</script>

<style scoped>
.breadcrumb {
  @apply flex items-center space-x-2;
}
</style>

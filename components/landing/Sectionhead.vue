<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['grid', 'lg:grid-cols-1', 'place-items-center', 'pt-16', 'pb-8', 'md:pt-8', align === 'center' && 'text-center']">
    <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
      <slot name="title">Title</slot>
    </h1>
    <p class="text-lg mt-4 text-slate-600 max-w-xl">
      <slot name="desc">Some description goes here</slot>
      <br /> <br />
    </p>
  </div>
</template>

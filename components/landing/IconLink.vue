<script setup lang="ts">
interface Props {
  href: string;
  icon?: string;
  styleName?: "outline" | "primary" | "inverted" | "muted";
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});
</script>

<template>
  <LandingLink :href="href" :styleName="styleName">
    <div class="flex items-center">
      <Icon v-if="icon" :name="icon" size="24" />
      <span class="ms-2"><slot /></span>
    </div>
  </LandingLink>
</template>

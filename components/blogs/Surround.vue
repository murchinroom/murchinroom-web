<template>
  <div v-if="prevArticle || nextArticle"
       class="bg-black px-10 py-16 max-sm:py-10 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">

    <h2 class="text-white text-2xl md:text-4xl">
      Continue reading...
    </h2>

    <p v-if="nextArticle" class="text-slate-500 mt-8 text-lg md:text-xl inline-flex items-center line-clamp-1">
      <!--      <Icon class="h-8 m-2 text-slate-500" name="bx:bxs-chevron-left" size="24"/>-->
      <span class="mr-1">Next<span class="max-sm:hidden"> article</span>: </span>
      <a :href="nextArticle?._path" class="text-slate-100 max-w-xs line-clamp-1 hover:underline">{{ nextArticle.title }}</a>
    </p>

    <p v-if="prevArticle" class="text-slate-500 mt-4 text-lg md:text-xl inline-flex items-center line-clamp-1">
      <!--      <Icon class="h-8 m-2 text-slate-500" name="bx:bxs-chevron-right" size="24"/>-->
      <span class="mr-1">Previous<span  class="max-sm:hidden"> article</span>: </span>
      <a :href="prevArticle?._path" class="text-slate-100 max-w-xs line-clamp-1 hover:underline">{{ prevArticle.title }}</a>
    </p>

  </div>
</template>

<script setup lang="ts">
import {type ParsedContent} from "@nuxt/content";

interface ArticleMetadata {
  title?: string,
  _path?: string,
  // description?: string,
  // publishedAt?: string,
}

defineProps<{
  prevArticle?: ArticleMetadata
  nextArticle?: ArticleMetadata
}>()

</script>

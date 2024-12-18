<script setup lang="ts">
import {queryContent} from "#imports";
import type {QueryBuilderParams} from "@nuxt/content";

definePageMeta({
  layout: "landing",
});

const query: QueryBuilderParams = {path: '/blogs', sort: [{publishedAt: -1}]}

// const articles = await queryContent(query).find()
// wrap in useAsyncData to prevent fetching duplication on first load.
const articles = useAsyncData('blogsQuery',
    () => {
      return queryContent(query)
          .where({
            "publishedAt": {$exists: true},
            "_draft": false,
          })
          .without("body") // exclude article content
          .limit(100)
          .find();
    }
).data;

// console.log("articles", articles, articles.value?.length)

</script>

<template>
  <LandingContainer>
    <BlogsHero></BlogsHero>
    <!--    <div class="mx-auto font-mono text-center text-orange-600">-->
    <!--      Blog index page.-->
    <!--    </div>-->
    <div class="mx-auto font-mono text-center">
      <div v-if="(articles?.length ?? -1) <= 0" class="mx-auto font-mono text-center text-lg text-orange-600">
        There is no publicly accessible blog content for the time being.
      </div>

      <!-- Card Grid -->
      <div class="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center place-items-center">
        <div v-for="article in articles" :key="article._path" class="min-w-full">
          <a :href="article._path" class="min-w-full">
            <BlogsCard :article="article"></BlogsCard>
          </a>
        </div>
      </div>
    </div>

    <BlogsMore></BlogsMore>
  </LandingContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { data: articleResult } = await useAsyncData('blogsQuery',
    async () => {
      return queryCollection('blogs')
          .where('publishedAt', 'IS NOT NULL')
          .where('draft', '<>', true)
          .select('title', 'description', 'publishedAt', 'path')
          .order('publishedAt', 'DESC')
          .limit(100)
          .all();
    }
);

const articles = computed(() => articleResult.value);

// console.log("articles", articles, articles.value?.length)

</script>

<template>
  <LandingContainer>
    <BlogsHero></BlogsHero>
    <div class="mx-auto font-mono text-center">
      <div v-if="(articles?.length ?? -1) <= 0" class="mx-auto font-mono text-center text-lg text-orange-600">
        There is no publicly accessible blog content for the time being.
      </div>

      <!-- Card Grid -->
      <div class="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center place-items-center">
        <div v-for="article in articles" :key="article.path" class="min-w-full">
          <a :href="article.path" class="min-w-full">
            <BlogsCard :article="article"></BlogsCard>
          </a>
        </div>
      </div>
    </div>

    <BlogsMore></BlogsMore>
  </LandingContainer>
</template>

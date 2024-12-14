<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <BlogsHero></BlogsHero>
    <div class="mx-auto font-mono text-center text-orange-600">
      Blog index page.
    </div>
    <div class="mx-auto font-mono text-center">
      <ContentList path="/blogs" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <a :href="article._path">
            <div class="border">
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
            </div>
          </a>
        </div>
      </ContentList>
    </div>

    <BlogsMore></BlogsMore>
  </LandingContainer>
</template>

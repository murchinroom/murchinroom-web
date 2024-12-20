<template>
  <div class="toc">
    <h2>{{ article?.title }}</h2>
    <p v-if="article?.description" class="description">{{ article.description }}</p>
    <p v-if="article?.publishedAt" class="published-at">{{ new Date(article.publishedAt).toLocaleDateString() }}</p>
    <ul>
      <li v-for="link in article?.body?.toc?.links" :key="link.id">
        <a :href="'#' + link.id" @click.prevent="scrollToHeader(link.id)" :class="{'ml-4': link.depth === 3}">
          {{ link.text }}
        </a>
        <ul v-if="link.children">
          <li v-for="child in link.children" :key="child.id">
            <a :href="'#' + child.id" @click.prevent="scrollToHeader(child.id)" class="ml-4">
              {{ child.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {type ParsedContent} from "@nuxt/content";

interface ArticleMetadata {
  title?: string;
  description?: string;
  publishedAt?: string;
}

defineProps<{
  article?: ArticleMetadata & ParsedContent;
}>();

const scrollToHeader = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: 'smooth'});
  }
};
</script>

<style scoped>
.toc {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.published-at {
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}

.ml-4 {
  margin-left: 1rem;
}
</style>

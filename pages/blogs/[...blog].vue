<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const route = useRoute();

const { data: doc } = await useAsyncData('blogsDoc:' + route.path,
    () => queryCollection('blogs').path(route.path).first()
);

const { data: surroundResult } = await useAsyncData('blogsSurround:' + route.path,
    () => queryCollectionItemSurroundings('blogs', route.path, {
      fields: ['title', 'path', 'publishedAt'],
    })
);

const prevArticle = computed(() => surroundResult?.value?.[0] ?? undefined);
const nextArticle = computed(() => surroundResult?.value?.[1] ?? undefined);
</script>

<template>
  <LandingContainer>
    <BlogsNavbar class="lg:ml-8"></BlogsNavbar>
    <div class="blog-page flex flex-col lg:flex-row">
      <template v-if="doc">
        <div class="order-2 lg:order-1 blog-content flex-1 max-md:max-w-full xl:max-w-screen-xl">
          <article class="md:ml-4 md:max-w-screen-md lg:max-w-screen-md">
            <ContentRenderer :value="doc"/>
          </article>
        </div>
        <!-- todo: sticky -->
        <div class="order-1 lg:order-2 blog-toc lg:ml-4 max-lg:mb-0 lg:mb-4 lg:w-1/4 lg:right-4 lg:mt-16 max-lg:mt-4 lg:sticky lg:top-0">
          <BlogsToc :article="doc"/>
        </div>
      </template>

      <template v-else>
        <div class="flex flex-col my-16 mx-auto text-center font-mono text-orange-600">
          <span class="flex-1 text-lg">Page not found.</span>
          <a class="flex-1 my-4 mx-auto text-center" href="/blogs">
            <Icon name="bx:bxs-left-arrow" class="h-5 w-5"></Icon>
          </a>
        </div>
      </template>
    </div>
    <LazyBlogsSurround :prevArticle="prevArticle" :nextArticle="nextArticle"></LazyBlogsSurround>
  </LandingContainer>
</template>

<style>
.blog-content {
  /* General styles */
  font-family: ui-serif, serif;
  line-height: 1.6;
  color: #333;
  /*background-color: #f4f4f9;*/
  margin: 0;
  padding: 20px;

  /* Custom headers */

  h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2em;
    border-bottom: 2px solid #2c3e50;
    padding-bottom: 10px;
  }

  h1:hover:before {
    content: "H1 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h2 {
    font-size: 1.75em;
    /*border-bottom: 1px solid #2c3e50;*/
    padding-bottom: 8px;
  }

  h2:hover:before {
    content: "H2 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h3 {
    font-size: 1.5em;
  }

  h3:hover:before {
    content: "H3 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h4 {
    font-size: 1.25em;
  }

  h4:hover:before {
    content: "H4 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h5 {
    font-size: 1em;
  }

  h5:hover:before {
    content: "H5 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h6 {
    font-size: 0.875em;
    color: #666;
  }

  h6:hover:before {
    content: "H6 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  /* Paragraphs */

  p {
    margin: 10px 0;
  }

  /* Links */

  a {
    color: #3498db;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Code blocks */

  pre, code {
    font-family: ui-monospace, monospace;
    background-color: #f4f4f9;
    padding: 5px;
    border-radius: 4px;
    font-size: 94%;
  }

  pre {
    overflow: auto;
    padding: 2px 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  code {
    color: #e74c3c;
  }

  /* Lists */

  ul, ol {
    margin: 10px 0;
    padding-left: 20px;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin: 4px 0;
  }

  /* Blockquotes */

  blockquote {
    margin: 20px 0;
    padding: 10px 20px;
    background-color: #f9f9f9;
    border-left: 5px solid #ccc;
  }

  blockquote p {
    margin: 0;
    color: #666;
  }

  /* Images */

  img {
    max-width: 100%;
    display: block;
    margin: auto;
  }

  /* GitHub Style Tables */

  table {
    padding: 0;
    word-break: initial;

    /* centering the tab: margin-left: auto; margin-right: auto; */
    margin: 16px auto;
    place-self: center;
  }

  table tr {
    border-top: 1px solid #dfe2e5;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n),
  thead {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #dfe2e5;
    border-bottom: 0;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th:first-child,
  table tr td:first-child {
    margin-top: 0;
  }

  table tr th:last-child,
  table tr td:last-child {
    margin-bottom: 0;
  }
}
</style>

<style scoped>
.blog-page {
  display: flex;
  flex-direction: column;
}

.blog-toc {
  flex-shrink: 0;
  width: 100%;
}

@media (min-width: 1024px) {
  .blog-page {
    flex-direction: row;
  }

  .blog-toc {
    margin-left: 1rem;
    width: 25%;
  }
}
</style>

<style>
.blog-content {
  /* General styles */
  font-family: ui-serif, serif;
  line-height: 1.6;
  color: #333;
  /*background-color: #f4f4f9;*/
  margin: 0;
  padding: 20px;

  /* Custom headers */

  h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2em;
    border-bottom: 2px solid #2c3e50;
    padding-bottom: 10px;
  }

  h1:hover:before {
    content: "H1 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h2 {
    font-size: 1.75em;
    /*border-bottom: 1px solid #2c3e50;*/
    padding-bottom: 8px;
  }

  h2:hover:before {
    content: "H2 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h3 {
    font-size: 1.5em;
  }

  h3:hover:before {
    content: "H3 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h4 {
    font-size: 1.25em;
  }

  h4:hover:before {
    content: "H4 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h5 {
    font-size: 1em;
  }

  h5:hover:before {
    content: "H5 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  h6 {
    font-size: 0.875em;
    color: #666;
  }

  h6:hover:before {
    content: "H6 ";
    font-weight: lighter;
    color: #999;
    font-size: 65%;
  }

  /* Paragraphs */

  p {
    margin: 10px 0;
  }

  /* Links */

  a {
    color: #3498db;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Code blocks */

  pre, code {
    font-family: ui-monospace, monospace;
    background-color: #f4f4f9;
    padding: 5px;
    border-radius: 4px;
    font-size: 94%;
  }

  pre {
    overflow: auto;
    padding: 2px 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  code {
    color: #e74c3c;
  }

  /* Lists */

  ul, ol {
    margin: 10px 0;
    padding-left: 20px;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin: 4px 0;
  }

  /* Blockquotes */

  blockquote {
    margin: 20px 0;
    padding: 10px 20px;
    background-color: #f9f9f9;
    border-left: 5px solid #ccc;
  }

  blockquote p {
    margin: 0;
    color: #666;
  }

  /* Images */

  img {
    max-width: 100%;
    display: block;
    margin: auto;
  }

  /* GitHub Style Tables */

  table {
    padding: 0;
    word-break: initial;

    /* centering the tab: margin-left: auto; margin-right: auto; */
    margin: 16px auto;
    place-self: center;
  }

  table tr {
    border-top: 1px solid #dfe2e5;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n),
  thead {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #dfe2e5;
    border-bottom: 0;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th:first-child,
  table tr td:first-child {
    margin-top: 0;
  }

  table tr th:last-child,
  table tr td:last-child {
    margin-bottom: 0;
  }
}
</style>

<style scoped>
.blog-page {
  display: flex;
  flex-direction: column;
}

.blog-content {
  flex: 1;
}

.blog-toc {
  flex-shrink: 0;
  width: 100%;
}

@media (min-width: 1024px) {
  .blog-page {
    flex-direction: row;
  }

  .blog-toc {
    margin-left: 1rem;
    width: 25%;
  }
}
</style>

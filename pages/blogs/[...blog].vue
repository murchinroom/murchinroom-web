<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <!--    <BlogsHero></BlogsHero>-->
    <BlogsNavbar></BlogsNavbar>
    <div class="blog-content">
      <ContentDoc>
        <template v-slot="{ doc }">
          <article class="max-md:max-w-full xl:max-w-screen-xl">
            <!--            <h1>{{ doc.title }}</h1>-->
            <ContentRenderer :value="doc"/>
          </article>
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </div>
    <!--    <BlogsMore></BlogsMore>-->
  </LandingContainer>
</template>

<style>
.blog-content {
  /* General styles */
  font-family: 'Computer Modern', 'PT Serif', 'Times New Roman', Times, serif;
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
    font-family: 'Courier New', Courier, monospace;
    background-color: #f4f4f9;
    padding: 5px;
    border-radius: 4px;
  }

  pre {
    overflow: auto;
    padding: 10px;
    border: 1px solid #ddd;
  }

  code {
    color: #e74c3c;
  }

  /* Lists */

  ul, ol {
    margin: 10px 0;
    padding-left: 20px;
  }

  li {
    margin: 5px 0;
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
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
          <article>
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

  h2 {
    font-size: 1.75em;
    /*border-bottom: 1px solid #2c3e50;*/
    padding-bottom: 8px;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.25em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.875em;
    color: #666;
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
}
</style>
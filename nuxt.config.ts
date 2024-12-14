// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxt/content"],
  content: {
    sources: {
      // default source is the `content` directory: not used.
      // Additional sources: SRC:/public/blogs/**/*.md -> DST_URL/blogs/**/*
      blog: {
        prefix: '/blogs/',
        driver: 'fs',
        // Put blogs under public: support Markdown documents
        // to access images or other attachments through relative paths.
        // Bonus:
        // - access DST_URL/blogs/xxx for rendered page,
        // - access DST_URL/blogs/xxx.md to download the raw Markdown.
        // ... Anyway, the whole site is open-sourced, no problem of information leakage.
        base: resolve(__dirname, 'public/blogs')
      }
    },
  }
});
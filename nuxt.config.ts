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
  modules: ["nuxt-icon", "@nuxt/content", "@nuxtjs/seo"],
  site: {
    url: "www.murchinroom.fun",
  },
  app: {
    head: {
      title: "murchinroom | A magic shop where AI meets Art",
    }
  },
  content: {
    sources: {
      // default source is the `content` directory: not used.
      // Additional sources: SRC:/public/blogs/**/*.md -> DST_URL/blogs/**/*
      blogs: {
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
    navigation: {
      fields: ['publishedAt']
    },
    markdown: {
      rehypePlugins: {
        // "rehype-mathjax": {},
        "rehype-katex": {
          output: 'mathml' // https://github.com/nuxt/content/discussions/2561
        }
      },
      remarkPlugins: [
        'remark-math'
      ],
    },
    highlight: {
      // grep -IRn '```' | grep -v '```$' | grep '.md:' | grep -v '/plugins' | cut -d'`' -f4 | tr '[:upper:]' '[:lower:]' | sort | uniq | xargs
      langs: ['asm', 'awk', 'bash', 'bibtex', 'c', 'c#', 'c++', 'cmd', 'ssh-config', 'cpp', 'cs', 'csharp', 'css', 'csv', 'dart', 'diff', 'docker', 'dockerfile', 'fish', 'go', 'html', 'http', 'ini', 'java', 'javascript', 'js', 'json', 'jsonl', 'latex', 'lisp', 'log', 'lua', 'make', 'makefile', 'markdown', 'matlab', 'md', 'mermaid', 'nginx', 'nix', 'perl', 'php', 'plsql', 'prolog', 'proto', 'protobuf', 'py', 'python', 'r', 'rust', 'sh', 'shell', 'shellscript', 'sql', 'swift', 'tex', 'toml', 'ts', 'typescript', 'vb', 'vue', 'xml', 'yaml', 'yml', 'zig', 'zsh'],
      theme: {
        default: 'github-light', // Default theme (same as single string)
        dark: 'github-dark', // Theme used if `html.dark`
        sepia: 'monokai', // Theme used if `html.sepia`
      }
    },
  },

  compatibilityDate: "2024-12-14"
});
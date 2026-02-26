// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/icon", "@nuxt/content", "@nuxtjs/seo"],
  site: {
    url: "www.murchinroom.fun",
  },
  app: {
    head: {
      title: "murchinroom | A magic shop where AI meets Art",
    }
  },
  content: {
    build: {
      markdown: {
        rehypePlugins: {
          // "rehype-mathjax": {},
          "rehype-katex": {
            options: {
              output: 'mathml' // https://github.com/nuxt/content/discussions/2561
            }
          }
        },
        remarkPlugins: {
          'remark-math': {},
        },
        highlight: {
          // grep -IRn '```' | grep -v '```$' | grep '.md:' | grep -v '/plugins' | cut -d'`' -f4 | tr '[:upper:]' '[:lower:]' | sort | uniq | xargs
          langs: ['asm', 'awk', 'bash', 'bibtex', 'c', 'cpp', 'csharp', 'ssh-config', 'cs', 'css', 'csv', 'dart', 'diff', 'docker', 'dockerfile', 'fish', 'go', 'html', 'http', 'ini', 'java', 'javascript', 'js', 'json', 'jsonl', 'latex', 'lisp', 'log', 'lua', 'make', 'makefile', 'markdown', 'matlab', 'md', 'mermaid', 'nginx', 'nix', 'perl', 'php', 'plsql', 'prolog', 'proto', 'python', 'r', 'rust', 'sh', 'shell', 'shellscript', 'sql', 'swift', 'tex', 'toml', 'typescript', 'vb', 'vue', 'xml', 'yaml', 'zig', 'zsh'],
          theme: {
            default: 'github-light', // Default theme (same as single string)
            dark: 'github-dark', // Theme used if `html.dark`
            sepia: 'monokai', // Theme used if `html.sepia`
          }
        },
      }
    }
  },

  compatibilityDate: "2024-12-14"
});
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path";
import { createRequire } from "node:module";

// Fix nuxt-og-image@4.x incompatibility with unenv@2.x (Nitro 2.11+):
// unenv@2.x changed its runtime path structure, so "unenv/runtime/mock/empty"
// now resolves to a non-existent path. Override Nitro aliases to use the
// correct path via "unenv/mock/empty" (which resolves correctly in unenv@2.x).
function resolveUnenvMockEmpty(): string | undefined {
  try {
    const nuxtPkg = createRequire(import.meta.url).resolve("nuxt/package.json");
    const nitroPkg = createRequire(nuxtPkg).resolve("nitropack/package.json");
    return createRequire(nitroPkg).resolve("unenv/mock/empty");
  } catch {
    return undefined;
  }
}
const unenvMockEmpty = resolveUnenvMockEmpty();

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/seo",
    // Fix nuxt-og-image@4.x incompatibility with unenv@2.x (Nitro 2.11+):
    // unenv@2.x changed runtime path structure; "unenv/runtime/mock/empty"
    // no longer resolves to a valid file. Replace with the correct path.
    ...(unenvMockEmpty
      ? [
          (_: unknown, nuxt: { hook: (event: string, cb: (...args: unknown[]) => void) => void }) => {
            const fixAliases = (nitroConfig: { alias?: Record<string, string> }) => {
              if (!nitroConfig.alias) return;
              for (const key of Object.keys(nitroConfig.alias)) {
                if (nitroConfig.alias[key] === "unenv/runtime/mock/empty") {
                  nitroConfig.alias[key] = unenvMockEmpty!;
                }
              }
            };
            nuxt.hook("nitro:config", fixAliases as (...args: unknown[]) => void);
            nuxt.hook("nitro:init", ((nitro: { hooks: { hook: (event: string, cb: (...args: unknown[]) => void) => void } }) => {
              nitro.hooks.hook("prerender:config", fixAliases as (...args: unknown[]) => void);
            }) as (...args: unknown[]) => void);
          },
        ]
      : []),
  ],
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

  compatibilityDate: "2024-12-14",
});
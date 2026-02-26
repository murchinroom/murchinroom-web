import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // blogs collection: sourced from public/blogs/ so that:
    // - rendered pages are accessible at /blogs/**
    // - raw .md files are also downloadable as static assets from the same path
    blogs: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        // cwd is relative to the project root
        cwd: './public/blogs',
        prefix: '/blogs',
      },
      schema: z.object({
        publishedAt: z.string().optional(),
        draft: z.boolean().optional(),
      }),
    }),
  },
})

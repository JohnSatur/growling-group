import { glob } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) =>z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: reference('authors'),
    slug: z.string(),
    image: image().optional(),
    tags: z.array(z.string()).optional(),
    relatedPosts: z.array(reference('posts')).optional(),
    category: reference('categories').optional(),
  }),
});

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    bio: z.string(),
    email: z.string().email(),
    role: z.enum(['Experto en seguridad industrial']),
    image: image().optional(),
  })
});

const categoriesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/categories' }),
  schema: () => z.object({
    name: z.string(),
    slug: z.string(),
    color: z.string().optional(),
    // order: z.number().default(0),
  })
});

export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
  categories: categoriesCollection,
};

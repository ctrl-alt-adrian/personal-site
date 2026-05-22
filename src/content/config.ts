import { defineCollection, z } from 'astro:content';

// Markdown collections ----------------------------------------------------
const post = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  kind: z.enum(['essay', 'note', 'build']).default('note'),
  project: z.string().optional(),
  draft: z.boolean().default(false),
});

const writing = defineCollection({ type: 'content', schema: post });

// Data collections --------------------------------------------------------
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tag: z.string(),
    status: z.enum(['live', 'beta', 'wip', 'archived']),
    desc: z.string(),
    url: z.string().url().optional(),
    shipped: z.coerce.date().optional(),
  }),
});

const reading = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    state: z.enum(['reading', 'rereading', 'done', 'shelf']),
    finished: z.coerce.date().optional(),
  }),
});

export const collections = { writing, projects, reading };

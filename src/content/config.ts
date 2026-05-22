import { defineCollection, z } from 'astro:content';

// Markdown collections ----------------------------------------------------
const post = z.object({
  title: z.string(),
  date: z.coerce.date(),
  kind: z.enum(['essay', 'note', 'build']),
  minutes: z.number().optional(),
  project: z.string().optional(),    // for build-log entries
  draft: z.boolean().default(false),
});

const writing = defineCollection({ type: 'content', schema: post });
const log     = defineCollection({ type: 'content', schema: post });

// Data collections --------------------------------------------------------
const projects = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tag: z.string(),
    status: z.enum(['live', 'beta', 'wip', 'archived']),
    desc: z.string(),
    url: z.string().url().optional(),
    shipped: z.coerce.date().optional(),
    order: z.number().default(0),
  }),
});

const reading = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    state: z.enum(['reading', 'rereading', 'done', 'shelf']),
    finished: z.coerce.date().optional(),
  }),
});

export const collections = { writing, log, projects, reading };

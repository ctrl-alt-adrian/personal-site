import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// Rewrites image paths so Obsidian-dragged attachments resolve at runtime.
// Obsidian writes `public/images/foo.png` (vault-relative); Astro serves
// /public/* at the URL root, so `/images/foo.png` is what the browser needs.
function remarkRewriteImagePaths() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'image' && typeof node.url === 'string') {
        const m = node.url.match(/(?:^|\/)public\/images\/(.+)$/);
        if (m) node.url = '/images/' + m[1];
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
  };
}

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://example.com', // ← change to your domain
  trailingSlash: 'never',
  integrations: [svelte()],
  markdown: {
    remarkPlugins: [remarkRewriteImagePaths],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});

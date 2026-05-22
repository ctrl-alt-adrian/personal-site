import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://example.com', // ← change to your domain
  trailingSlash: 'never',
  integrations: [svelte()],
});

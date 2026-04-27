// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.js';

// https://astro.build/config
export default defineConfig({
  

  site: siteConfig.baseUrl,
  
  // Output static site
  output: 'static',
  
  // Integrations
  integrations: [
    sitemap(),
  ],
});

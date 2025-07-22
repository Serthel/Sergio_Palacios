// @ts-check
import { defineConfig } from 'astro/config';
import skeleton from '@skeletonlabs/skeleton/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/Sergio_Palacios/',
  integrations: [
    react(),
    skeleton(), 
  ],
});

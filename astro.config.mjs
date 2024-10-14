// @ts-check
import {defineConfig, squooshImageService} from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    }
  },
  image: {
    service: squooshImageService(),
  },
});
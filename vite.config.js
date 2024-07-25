import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        display: 'swap',
        injectTo: 'head-prepend',
        families: [
          {
            name: 'Poppins',
            styles: 'wght@400;500;600;700',
            defer: true,
          },
        ],
      },
    }),
  ],
})

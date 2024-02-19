import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Manrope',
            local: 'Manrope',
            src: './src/assets/fonts/Manrope-*.ttf',
          },
        ],
        display: 'auto',
        preload: true,
        prefetch: false,
      },
    }),
  ],
});

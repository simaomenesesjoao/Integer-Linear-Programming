import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    fs: {
      allow: [
        path.resolve(__dirname), // allow the root folder (dist/)
        path.resolve(__dirname, '../js_widgets') // allow external folder
      ],
    },
  },
  optimizeDeps: {
    include: ['pixi.js', 'three'], // pre-bundle dependencies used by external files
  },

});

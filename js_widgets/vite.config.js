import { defineConfig } from 'vite';
import { readdirSync } from 'fs';
import path from 'path';

const srcRoot = path.resolve(__dirname, 'src');

const entries = Object.fromEntries(
  readdirSync(srcRoot).map(name => [
    name,
    path.resolve(srcRoot, name, 'index.js')
  ])
);

export default defineConfig({
  build: {
    lib: {
      entry: entries,
      formats: ['es']
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['three', 'pixi.js'],
      output: {
        entryFileNames: '[name]/index.js'
      }
    }
  }
});

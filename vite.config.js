import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
import path from 'path';
import vue from '@vitejs/plugin-vue';

const imgPath = '/src/assets/img/';

const config = {
  server: { port: 3000 },
  base: '/',
  plugins: [
    copy({
      targets: [
        { src: imgPath, dest: 'public' }
      ]
    }),
    vue()
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
}

export default defineConfig(config);

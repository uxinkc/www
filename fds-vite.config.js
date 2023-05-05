import { defineConfig } from 'vite'
//import { viteStaticCopy } from 'vite-plugin-static-copy'
import copy from 'rollup-plugin-copy'
import path from 'path';
import vue from '@vitejs/plugin-vue'
//import path from 'path'

// FDS Style path to allow for usage of SCSS variables
//const fdsScssPath = path.resolve(__dirname, "./node_modules/fds-style/src/stylesheets/fds-style.scss")
const scssPath = './node_modules/fds-style/src/stylesheets/fds-style.scss';
const fontsPath = './node_modules/fds-style/src/fonts/';
const imagesPath = './node_modules/fds-style/src/img/';

const config = {
  server: { port: 3000 },
  base: '/',
  plugins: [
    copy({
      targets: [
        { src: fontsPath, dest: 'public' },
        { src: imagesPath, dest: 'public' }
      ]
    }),
    vue()
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${scssPath}";`
      }
    }
  }
}

export default defineConfig(config);

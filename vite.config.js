import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
//import path from 'path'

//const fsaScssPath = path.resolve(__dirname, "./node_modules/fsa-style/src/stylesheets/fsa-style.scss")
// FSA Style path to allow for usage of SCSS variables
const fsaScssPath = "./node_modules/fsa-style/src/stylesheets/fsa-style.scss"

const config = {
  server: { port: 3000 },
  base: '/www/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "${fsaScssPath}";`
      }
    }
  },  
}

export default defineConfig(config);

import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin(), bytecodePlugin()],
  },
  renderer: {
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src/renderer/src/') }],
    },
    plugins: [react()],
  },
});

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'electron-vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	main: {},
	preload: {},
	renderer: {
		plugins: [react(), tsconfigPaths()],
	},
});

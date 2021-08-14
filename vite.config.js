import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	server: {
		host: true,
		open: true,
		port: 8000,
		strictPort: true,
	},
});

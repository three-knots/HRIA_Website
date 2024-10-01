import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['vaul-svelte', 'mode-watcher'] // Add any other problematic dependencies here
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'$lib': path.resolve(__dirname, './src/lib')
		}
	}
});

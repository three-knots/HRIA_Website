import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import nodeStdlibBrowser from './vite-plugin-node-stdlib-browser';

export default defineConfig({
	plugins: [sveltekit(), nodeStdlibBrowser()],
	ssr: {
		noExternal: true,
		external: ['pg']
	},
	optimizeDeps: {
		include: ['buffer']
	},
	build: {
		rollupOptions: {
			external: ['buffer']
		}
	},
	resolve: {
		alias: {
			buffer: 'buffer/'
		}
	}
	// Keep any other existing configurations you need
});

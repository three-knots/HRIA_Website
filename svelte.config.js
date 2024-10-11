import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@': path.resolve(__dirname, './src'),
			'$lib': path.resolve(__dirname, './src/lib')
		}
	},
	compilerOptions: {
		// runes: true
            //Throws error from lucide-icons (and many many others).  cannot change to runes mode until they update their syntax for svelte 5
	},
	vite: {
		define: {
			// Dynamically inject environment variables without VITE_ prefix - for use with docker dev-environment
			...['PUBLIC_SUPABASE_URL', 'PUBLIC_SUPABASE_ANON_KEY', 'GITHUB_CLIENT_ID', 'GITHUB_CLIENT_SECRET'].reduce((acc, key) => {
				if (process.env[key]) {
					acc[`import.meta.env.${key}`] = JSON.stringify(process.env[key]);
				}
				return acc;
			}, {})
		}
	}
};

export default config;

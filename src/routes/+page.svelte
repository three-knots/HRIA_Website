<script lang="ts">
	import { page } from '$app/stores';

	const { data } = $props();
	// # grab data from page.server

	$inspect(data.profiles);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

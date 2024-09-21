<script lang="ts">
	import { invalidate } from '$app/navigation';

	const { data: propsData, children } = $props();

	$effect(() => {
		const { data } = propsData.supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== propsData.session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div>
	<h2>Hello from Layout</h2>
	{@render children()}
</div>

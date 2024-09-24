<script>
	import '../app.css';
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

	import * as Menubar from '$lib/components/ui/menubar';
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>Home</Menubar.Trigger>

		<Menubar.Trigger>Prayer Times</Menubar.Trigger>

		<Menubar.Trigger>About</Menubar.Trigger>

		<Menubar.Trigger>Donations</Menubar.Trigger>

		<Menubar.Trigger>Events</Menubar.Trigger>
		<Menubar.Trigger>Sisters</Menubar.Trigger>
		<Menubar.Trigger>Youth</Menubar.Trigger>
	</Menubar.Menu>
</Menubar.Root>

<div>
	<h2>Hello from Layout</h2>
	{@render children()}
</div>

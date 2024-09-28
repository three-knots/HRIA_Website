<script>
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { ModeWatcher } from "mode-watcher"; //Dark Mode Support
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

	//dark mode button
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";

	import { resetMode, setMode } from "mode-watcher";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";

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

<!-- Dark Mode Button -->
<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
	  <Button builders={[builder]} variant="outline" size="icon">
		<Sun
		  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		/>
		<Moon
		  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/>
		<span class="sr-only">Toggle theme</span>
	  </Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
	  <DropdownMenu.Item on:click={() => setMode("light")}
		>Light</DropdownMenu.Item
	  >
	  <DropdownMenu.Item on:click={() => setMode("dark")}>Dark</DropdownMenu.Item>
	  <DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
  </DropdownMenu.Root>

<div>
	<h2>Hello from Layout</h2>
	{@render children()}
</div>

<ModeWatcher /> <!-- Dark Mode Support -->

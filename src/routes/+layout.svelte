<script lang="ts">
	import RadioGroup from './../lib/components/ui/radio-group/radio-group.svelte';
	// import Content from './../../node_modules/vaul-svelte/dist/vaul/components/content.svelte';
	import Separator from './../lib/components/ui/separator/separator.svelte';
	// import { ArrowRight } from 'lucide-svelte/icons/arrow-right';
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

	let bookmarks = false;
	let fullUrls = true;

	//dark mode button
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";

	import { resetMode, setMode } from "mode-watcher";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";

	const profileRadioValue = "system";	

</script>

<Menubar.Root>

	<Menubar.Menu> <a href="/"> Home </a> </Menubar.Menu>

	<Menubar.Menu> <a href="/prayer-times"> Prayer Times </a> </Menubar.Menu>

	<Menubar.Menu> <a href="/about"> About </a> </Menubar.Menu>

	<Menubar.Menu> <a href="/donations"> Donations </a> </Menubar.Menu>

	<Menubar.Menu> <a href="/events"> Events </a> </Menubar.Menu>

	<Menubar.Menu> <a href="/sisters"> Sisters </a> </Menubar.Menu>

	<Menubar.Menu> <a href="/youth"> Youth </a> </Menubar.Menu>
	

	<Menubar.Menu>
		<Menubar.Trigger> Light/Dark Mode </Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item> 
				Set Light or Dark Mode
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	
	<Menubar.Menu>
		<Menubar.Trigger> Light/Dark Mode </Menubar.Trigger>
		<Menubar.Content> 
			<Menubar.RadioGroup>
				<Menubar.RadioItem value="light">Light</Menubar.RadioItem>
				<Menubar.RadioItem value="dark">Dark</Menubar.RadioItem>
				<Menubar.RadioItem value="system">System</Menubar.RadioItem>
			</Menubar.RadioGroup>
		</Menubar.Content>
	</Menubar.Menu>
	

</Menubar.Root>


<!-- Dark Mode Button
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
  </DropdownMenu.Root> -->

<div>
	<h2>Hello from Layout.svelte</h2>
	{@render children()}
</div>

<ModeWatcher /> <!-- Dark Mode Support -->

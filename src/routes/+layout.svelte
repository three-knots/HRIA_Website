<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { ModeWatcher } from "mode-watcher"; //Dark Mode Support
	import { imam } from '$lib/components/information';
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

	import { resetMode, setMode } from "mode-watcher";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";

	const modeRadioValue = "system";	

</script>

<Menubar.Root>

	<Menubar.Menu> <a href="/"> Home </a> </Menubar.Menu>

	<Menubar.Menu>
		<Menubar.Trigger> Prayer Times </Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item> <a href="/prayer-times"> Prayer Times </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/prayer-times/monthly"> Monthly Prayer Times </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/prayer-times/yearly"> Yearly Prayer Times </a> </Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>

	<Menubar.Menu>
		<Menubar.Trigger> About </Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item> <a href="/about"> About </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/about/imam"> {imam.name} </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/about/contact"> Contact </a> </Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>

	<Menubar.Menu>
		<Menubar.Trigger> Donations </Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item> <a href="/donations"> Donations </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/donations/onetime"> One-Time Donations </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/donations/recurring"> Recurring Donations </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/donations/zakat"> Zakat </a> </Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>

	<Menubar.Menu>
		<Menubar.Trigger> Events </Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item> <a href="/events"> Events </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/events/calendar"> Calendar </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/events/ramadan"> Ramadan </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/events/eid"> Eid </a> </Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>

	<Menubar.Menu> 
		<Menubar.Trigger> Sisters </Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item> <a href="/sisters"> Sisters </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/sisters/events"> Events </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/sisters/lessons"> Lessons </a> </Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>

	<Menubar.Menu> 
		<Menubar.Trigger> Youth </Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item> <a href="/youth"> Youth </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/youth/madrassa"> Madrassa </a> </Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item> <a href="/youth/sports"> Sports </a> </Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	
	<Menubar.Menu>    </Menubar.Menu>

	<Menubar.Menu>
		<Menubar.Trigger> Light/Dark Mode </Menubar.Trigger>
		<Menubar.Content> 
			<Menubar.Item on:click={() => setMode("light")}>
				Light
			</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item on:click={() => setMode("dark")}>
				Dark
			</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item on:click={() => resetMode()}>
				System
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	

</Menubar.Root>



<div>
	<!-- <h2>Hello from Layout.svelte</h2> -->
	{@render children()}
</div>

<ModeWatcher /> <!-- Dark Mode Support -->

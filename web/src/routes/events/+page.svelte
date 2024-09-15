<script>
	import { onMount } from 'svelte';

	let events = [];

	onMount(async () => {
		// TODO: Fetch events from API or CMS
		events = [
			{ title: 'Eid Prayer', date: '2023-06-28' },
			{ title: 'Community Iftar', date: '2023-04-15' },
			{ title: 'Islamic Study Circle', date: '2023-05-01' }
		];
	});
</script>

<h1>Upcoming Events</h1>

<ul>
	{#each events as event}
		<li>
			<h3>{event.title}</h3>
			<p>Date: {event.date}</p>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		margin-bottom: 20px;
	}
</style>

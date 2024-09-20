<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let zipCode: string = '';
	let prayerTimes: any = null;
	let iqamaTimes: any = null;
	let error: string = '';

	const fetchPrayerTimes = async () => {
		if (!zipCode) {
			error = 'Please enter a zip code.';
			return;
		}
		try {
			error = '';
			// Fetch coordinates based on zip code
			const geoResponse = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
			if (!geoResponse.ok) {
				throw new Error('Invalid zip code.');
			}
			const geoData = await geoResponse.json();
			const latitude = geoData.places[0].latitude;
			const longitude = geoData.places[0].longitude;

			// Fetch prayer times from AlAdhan API
			const today = new Date().toISOString().split('T')[0];
			const apiResponse = await fetch(
				`https://api.aladhan.com/v1/timings/${today}?latitude=${latitude}&longitude=${longitude}&method=2`
			);
			const apiData = await apiResponse.json();
			prayerTimes = apiData.data.timings;

			// Fetch iqama times from masjid info
			const masjidResponse = await fetch('/api/masjid');
			const masjidData = await masjidResponse.json();
			iqamaTimes = masjidData.iqama_times;
		} catch (err: any) {
			error = err.message;
		}
	};
</script>

<main>
	<h1>Prayer Times</h1>
	<input type="text" placeholder="Enter your zip code" bind:value={zipCode} />
	<button on:click={fetchPrayerTimes}>Get Prayer Times</button>

	{#if error}
		<p style="color: red">{error}</p>
	{/if}

	{#if prayerTimes && iqamaTimes}
		<h2>Today's Prayer Times</h2>
		<ul>
			{#each Object.entries(prayerTimes) as [key, time]}
				<li>{key}: {time}</li>
			{/each}
		</ul>

		<h2>Today's Iqama Times</h2>
		<ul>
			{#each Object.entries(iqamaTimes) as [key, time]}
				<li>{key}: {time}</li>
			{/each}
		</ul>

		<a href="/prayer-times/month">View Monthly Prayer Times</a>
	{/if}
</main>

<style>
	main {
		padding: 2rem;
		max-width: 600px;
		margin: auto;
	}
	input {
		padding: 0.5rem;
		margin-right: 0.5rem;
		width: 200px;
	}
	button {
		padding: 0.5rem 1rem;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		margin-bottom: 0.5rem;
	}
</style>

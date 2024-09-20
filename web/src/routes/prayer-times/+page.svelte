<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

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
			const today = new Date();
			const timestamp = Math.floor(today.getTime() / 1000);
			const apiResponse = await fetch(
				`https://api.aladhan.com/v1/timings/${timestamp}?latitude=${latitude}&longitude=${longitude}&method=2`
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

	// Optionally, fetch prayer times on component mount if desired
	// onMount(() => {
	//   fetchPrayerTimes();
	// });
</script>

<main>
	<h1>Prayer Times</h1>
	<div class="input-section">
		<input type="text" placeholder="Enter your zip code" bind:value={zipCode} />
		<button on:click={fetchPrayerTimes}>Get Prayer Times</button>
	</div>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	{#if prayerTimes && iqamaTimes}
		<section class="prayer-section">
			<h2>Today's Prayer Times</h2>
			<ul>
				{#each Object.entries(prayerTimes) as [key, time]}
					<li><strong>{key}:</strong> {time}</li>
				{/each}
			</ul>
		</section>

		<section class="iqama-section">
			<h2>Today's Iqama Times</h2>
			<ul>
				{#each Object.entries(iqamaTimes) as [key, time]}
					<li><strong>{key}:</strong> {time}</li>
				{/each}
			</ul>
		</section>

		<section class="navigation-section">
			<button on:click={() => goto('/prayer-times/month')}> View Monthly Prayer Times </button>
		</section>
	{/if}
</main>

<style>
	main {
		padding: 2rem;
		max-width: 600px;
		margin: auto;
		font-family: Arial, sans-serif;
	}
	.input-section {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	input {
		flex: 1;
		padding: 0.5rem;
		font-size: 1rem;
	}
	button {
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
	}
	.error {
		color: red;
		margin-bottom: 1rem;
	}
	.prayer-section,
	.iqama-section {
		margin-bottom: 1.5rem;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		padding: 0.3rem 0;
	}
	.navigation-section {
		text-align: center;
	}
	.navigation-section button {
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
	}
</style>

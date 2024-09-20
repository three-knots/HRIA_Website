<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let zipCode: string = '';
	let monthlyPrayerTimes: any[] = [];
	let error: string = '';

	const fetchMonthlyPrayerTimes = async () => {
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

			// Fetch current month and year
			const today = new Date();
			const month = today.getMonth() + 1; // Months are 0-indexed
			const year = today.getFullYear();

			// Fetch monthly prayer times from AlAdhan API
			const apiResponse = await fetch(
				`https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=2`
			);
			const apiData = await apiResponse.json();
			monthlyPrayerTimes = apiData.data;
		} catch (err: any) {
			error = err.message;
		}
	};
</script>

<main>
	<h1>Monthly Prayer Times</h1>
	<input type="text" placeholder="Enter your zip code" bind:value={zipCode} />
	<button on:click={fetchMonthlyPrayerTimes}>Get Monthly Prayer Times</button>

	{#if error}
		<p style="color: red">{error}</p>
	{/if}

	{#if monthlyPrayerTimes.length > 0}
		<h2>
			Prayer Times for {new Date().toLocaleString('default', { month: 'long' })}
			{new Date().getFullYear()}
		</h2>
		{#each monthlyPrayerTimes as day}
			<div class="day">
				<h3>{day.date.readable}</h3>
				<ul>
					{#each Object.entries(day.timings) as [key, time]}
						<li>{key}: {time}</li>
					{/each}
				</ul>
			</div>
		{/each}
	{/if}
</main>

<style>
	main {
		padding: 2rem;
		max-width: 800px;
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
	.day {
		margin-bottom: 2rem;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		margin-bottom: 0.3rem;
	}
</style>

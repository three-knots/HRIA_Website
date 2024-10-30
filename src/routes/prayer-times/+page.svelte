<script lang="ts">
	import { onMount } from 'svelte';
	export let data;

	let prayerTimes: any = null;
	let loading = true;
	let error: string | null = null;
	let Iqama_Times: any = null;
	const formatDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0');
		const yyyy = today.getFullYear();
		return `${dd}-${mm}-${yyyy}`;
	};

	const fetchPrayerTimes = async () => {
		try {
			const date = formatDate();
			const response = await fetch(
				`https://api.aladhan.com/v1/timingsByCity/${date}?city=${data.city}&country=${data.country}&method=2`
			);
			const result = await response.json();
			prayerTimes = result.data.timings;
			loading = false;
		} catch (e) {
			error = 'Failed to fetch prayer times';
			loading = false;
		}
	};

	onMount(() => {
		fetchPrayerTimes();
	});
</script>

<div
	class="hero min-h-screen"
	style="background-image: url(https://images.unsplash.com/photo-1655438807490-26e609cc07ac?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Prayer Times</h1>
			{#if loading}
				<p>Loading prayer times...</p>
			{:else if error}
				<p class="text-red-400">{error}</p>
			{:else if prayerTimes}
				<div class="grid grid-cols-3 gap-4 text-left">
					<div>Fajr:</div>
					<div>{prayerTimes.Fajr}</div>
					<div>Iqama: 6:30</div>
					<div>Sunrise:</div>
					<div>{prayerTimes.Sunrise}</div>
					<div></div>
					<div>Dhuhr:</div>
					<div>{prayerTimes.Dhuhr}</div>
					<div>Iqama: 1:30</div>
					<div>Asr:</div>
					<div>{prayerTimes.Asr}</div>
					<div>Iqama: 3:30</div>
					<div>Maghrib:</div>
					<div>{prayerTimes.Maghrib}</div>
					<div>Iqama: 5:30</div>
					<div>Isha:</div>
					<div>{prayerTimes.Isha}</div>
					<div>Iqama: 6:30</div>
					<div>Jumuah:</div>
					<div>First: 12:00</div>
					<div>Second: 1:00</div>
				</div>
			{/if}
		</div>
	</div>
</div>

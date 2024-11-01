<script lang="ts">
	import { onMount } from 'svelte';
	export let data;

	let prayerTimes: any = null;
	let loading = true;
	let error: string | null = null;

	// Helper function to format the current date
	const formatDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0');
		const yyyy = today.getFullYear();
		return `${dd}-${mm}-${yyyy}`;
	};

	// Helper function to add minutes to a time string "HH:MM"
	const addMinutes = (time: string, minutes: number): string => {
		const [hours, mins] = time.split(':').map(Number);
		const date = new Date();
		date.setHours(hours, mins + minutes, 0, 0);
		const newHours = String(date.getHours()).padStart(2, '0');
		const newMinutes = String(date.getMinutes()).padStart(2, '0');
		return `${newHours}:${newMinutes}`;
	};

	// Helper function to convert "HH:MM" to 12-hour format with am/pm
	const formatTo12Hour = (time: string): string => {
		const [hours, minutes] = time.split(':').map(Number);
		const ampm = hours >= 12 ? 'pm' : 'am';
		const twelveHour = hours % 12 === 0 ? 12 : hours % 12;
		return `${twelveHour}:${String(minutes).padStart(2, '0')} ${ampm}`;
	};

	// Function to compute Iqama time based on db settings
	const computeIqamaTime = (prayerName: string, prayerTime: string): string => {
		const iqamaSetting = data.iqama.find(
			(iq: any) => iq.prayer_name.toLowerCase() === prayerName.toLowerCase()
		);
		if (iqamaSetting) {
			if (iqamaSetting.iqama_time) {
				return iqamaSetting.iqama_time;
			} else if (iqamaSetting.diff_time) {
				return addMinutes(prayerTime, iqamaSetting.diff_time);
			}
		}
		return '';
	};

	const fetchPrayerTimes = async () => {
		try {
			const date = formatDate();
			const response = await fetch(
				`https://api.aladhan.com/v1/timingsByCity/${date}?city=${data.city.answer}&country=${data.country.answer}&method=2`
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
	style="background-image: url('https://images.unsplash.com/photo-1655438807490-26e609cc07ac?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
>
	<div class="hero-overlay bg-opacity-60">
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Prayer Times</h1>
				<div class="divider divider-primary"></div>
				{#if loading}
					<p>Loading prayer times...</p>
				{:else if error}
					<p class="text-red-400">{error}</p>
				{:else if prayerTimes}
					<div class="grid grid-cols-3 gap-4 text-left">
						{#each Object.keys(prayerTimes) as prayer}
							{#if prayer !== 'Sunset' && prayer !== 'Imsak' && prayer !== 'Midnight' && prayer !== 'FirstDhuhr' && prayer !== 'LastThird' && prayer !== 'Ma3shar' && prayer !== 'Firstthird' && prayer !== 'Lastthird'}
								<div>{prayer}:</div>
								<div>{formatTo12Hour(prayerTimes[prayer])}</div>
								<div>
									{#if prayer !== 'Sunrise' && prayer !== 'Sunset' && prayer !== 'Imsak'}
										{#if computeIqamaTime(prayer, prayerTimes[prayer])}
											Iqama: {computeIqamaTime(prayer, prayerTimes[prayer])}
										{:else}
											N/A
										{/if}
									{/if}
								</div>
							{/if}
						{/each}
					</div>
					<div class="divider divider-primary"></div>
					<div class="grid grid-cols-3 gap-4 text-left">
						<div>Jumuah:</div>
						<div>
							First: {data.iqama.find((iq: any) => iq.prayer_name.toLowerCase() === 'jumuah1')
								?.iqama_time || '12:00'}
						</div>
						<div>
							Second: {data.iqama.find((iq: any) => iq.prayer_name.toLowerCase() === 'jumuah2')
								?.iqama_time || '1:00'}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

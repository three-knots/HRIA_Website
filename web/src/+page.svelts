<script lang="ts">
  import { onMount } from 'svelte';

  interface PrayerTime {
    name: string;
    time: string;
  }

  let prayerTimes: PrayerTime[] = [];

  onMount(async () => {
    // TODO: Fetch prayer times from API
    prayerTimes = [
      { name: 'Fajr', time: '5:00 AM' },
      { name: 'Dhuhr', time: '1:00 PM' },
      { name: 'Asr', time: '4:30 PM' },
      { name: 'Maghrib', time: '7:30 PM' },
      { name: 'Isha', time: '9:00 PM' }
    ];
  });
</script>

<h1>Welcome to HRIA Mosque</h1>

<h2>Prayer Times</h2>
<ul>
  {#each prayerTimes as { name, time }}
    <li>{name}: {time}</li>
  {/each}
</ul>

<style>
  h1, h2 {
    color: #333;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
</style>
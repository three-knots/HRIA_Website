<script>
	export let data;
	import Layout from 'svelte-fluid-layout';
</script>

<div
	class="hero min-h-screen"
	style="background-image: url(https://img1.wsimg.com/isteam/stock/15760);"
>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Highlands Ranch Islamic Association</h1>
			<p class="mb-5">
				Serving the Islamic community of Highlands Ranch and the surrounding area. We are dedicated
				to supporting the needs of the community and providing a place of education and worship.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>

<Layout breakpoint="md">
	<header slot="header">
		<div class="divider divider-secondary"></div>
		<div class="card">
			<div class="card m-auto w-96">
				<div class="m-auto w-96 overflow-x-auto">
					<table class="table table-zebra">
						<!-- head -->
						<thead>
							<tr>
								<th>Prayer</th>
								<th>Iqama Time</th>
							</tr>
						</thead>
						<tbody>
							<!-- row 1 -->
							<tr>
								<td>Fajr</td>
								<td
									>{data.iqama.find((iq) => iq.prayer_name.toLowerCase() === 'fajr')
										?.iqama_time}</td
								>
							</tr>
							<!-- row 2 -->
							<tr>
								<td>Dhuhr</td>
								<td
									>{data.iqama.find((iq) => iq.prayer_name.toLowerCase() === 'dhuhr')
										?.iqama_time}</td
								>
							</tr>
							<!-- row 3 -->
							<tr>
								<td>Asr</td>
								<td
									>{data.iqama.find((iq) => iq.prayer_name.toLowerCase() === 'asr')?.iqama_time}</td
								>
							</tr>
							<tr>
								<td>Maghrib</td>
								<td
									>{data.iqama.find((iq) => iq.prayer_name.toLowerCase() === 'maghrib')?.diff_time} minutes
									after athan</td
								>
							</tr>
							<tr>
								<td>Isha</td>
								<td
									>{data.iqama.find((iq) => iq.prayer_name.toLowerCase() === 'isha')
										?.iqama_time}</td
								>
							</tr>
						</tbody>
					</table>
					<button class="btn btn-accent m-2">
						<a href="/prayer-times">Prayer Times Page</a>
					</button>
				</div>
			</div>
		</div>
		<div class="divider divider-secondary"></div>
	</header>
	<section slot="side1">
		<h2 class="text-center">Upcoming Events</h2>
		<!-- This automatically adds a new collapsible section for each event every time a new event is added to the database under the Events table -->
		<div id="group-focus" class="group-focus group">
			{#each data.events as event}
				<div
					tabindex="-1"
					class="collapse bg-warning text-primary-content focus:bg-secondary focus:text-secondary-content"
				>
					<div class="collapse-title">
						{new Date(event.event_date).toLocaleDateString()}
						<p class="font-semibold">{event.event_title}</p>
					</div>
					<div class="collapse-content">
						<p>{event.event_information}</p>
					</div>
				</div>
				<div class="divider divider-secondary"></div>
			{/each}
		</div>

		<div>
			<a href="/events" class="btn btn-accent">Events Page</a>
		</div>
	</section>

	<main slot="main" style="w-96;">
		<div class="card m-2 bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">Community</h2>
				<p>
					Get involved with the community by joining a quran study group, a youth group, or a
					sisters' program.
				</p>
				<div class="card-actions justify-end">
					<button class="btn">Community Page</button>
				</div>
			</div>
		</div>

		<div class="divider divider-secondary m-2"></div>

		<div class="card m-2 bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">Community</h2>
				<p>
					Get involved with the community by joining a quran study group, a youth group, or a
					sisters' program.
				</p>
				<div class="card-actions justify-end">
					<button class="btn">Community Page</button>
				</div>
			</div>
		</div>

		<div class="divider divider-secondary m-2"></div>

		<div class="card m-2 bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title">Community</h2>
				<p>
					Get involved with the community by joining a quran study group, a youth group, or a
					sisters' program.
				</p>
				<div class="card-actions justify-end">
					<button class="btn">Community Page</button>
				</div>
			</div>
		</div>
	</main>
	<section slot="side2">
		<h2 class="text-center">Announcements</h2>
		<!-- This automatically adds a new collapsible section for each announcement every time a new announcement is added to the database under the Announcements table -->
		<div id="group-focus" class="group-focus group">
			{#each data.announcements as announcement}
				<div
					tabindex="-1"
					class="collapse bg-warning text-primary-content focus:bg-secondary focus:text-secondary-content"
				>
					<div class="collapse-title">{announcement.announcement_subject}</div>
					<div class="collapse-content">
						<p>{announcement.announcement_body}</p>
					</div>
				</div>
				<div class="divider divider-secondary"></div>
			{/each}
		</div>
		<div>
			<a href="/events/announcements" class=" btn btn-accent">Announcements Page</a>
		</div>
	</section>
	<footer slot="footer">My Footer</footer>
</Layout>

<style>
</style>

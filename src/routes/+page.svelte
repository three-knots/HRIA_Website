<script>
	export let data;
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

<div class="grid grid-cols-3 gap-4 pt-10">
	<div class="card w-96 bg-primary text-primary-content">
		<div class="card-body">
			<h2 class="card-title">Announcements</h2>
			<!-- This automatically adds a new collapsible section for each announcement every time a new announcement is added to the database under the Announcements table -->
			<div id="group-focus" class="group-focus group">
				{#each data.announcements as announcement}
					<div
						tabindex="-1"
						class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
					>
						<div class="collapse-title">{announcement.announcement_subject}</div>
						<div class="collapse-content">
							<p>{announcement.announcement_body}</p>
						</div>
					</div>
				{/each}
			</div>
			<div class="card-actions justify-end">
				<a href="/events/announcements" class="btn">Announcements Page</a>
			</div>
		</div>
	</div>
	<div class="card w-96 bg-primary text-primary-content">
		<div class="card-body">
			<h2 class="card-title">Events</h2>
			<p>Upcoming events will be displayed here.</p>
			<div class="card-actions justify-end">
				<button class="btn">Events Page</button>
			</div>
		</div>
	</div>
	<div class="card w-96 bg-primary text-primary-content">
		<div class="card-body">
			<h2 class="card-title">Community</h2>
			<p>
				Get involved with the community by joining a quran study group, a youth group, or a sisters'
				program.
			</p>
			<div class="card-actions justify-end">
				<button class="btn">Community Page</button>
			</div>
		</div>
	</div>
</div>

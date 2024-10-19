<script>
	export let data;
</script>

<ul>
	{#each data.announcements as announcement}
		<li>{announcement.title}</li>
	{/each}
</ul>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Announcements</h1>
			<p class="py-6">Click the title of each announcement to view the details.</p>
			<button
				class="btn btn-primary"
				on:click={() =>
					document.getElementById('group-focus')?.scrollIntoView({ behavior: 'smooth' })}
				>Get Started</button
			>
		</div>
	</div>
</div>

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

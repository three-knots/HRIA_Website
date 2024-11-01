<script>
	export let data;
</script>

<ul>
	{#each data.announcements as announcement}
		<li>{announcement.title}</li>
	{/each}
</ul>
<div class="lg:card-bottom card bg-base-100 shadow-xl">
	<figure>
		<img
			src="https://images.unsplash.com/photo-1598723106396-f89827f6aa1a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Announcements"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title justify-center">Announcements</h2>
		<p class="body text-center">Click the title of each announcement to view the details.</p>
		<div class="card-actions justify-center">
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

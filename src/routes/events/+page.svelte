<script>
</script>

<div
	class="hero min-h-screen"
	style="background-image: url(https://images.unsplash.com/photo-1651293478838-1f51675131c5?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Events</h1>
			<p class="mb-5">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>

<h2>Events</h2>
<!-- This automatically adds a new collapsible section for each event every time a new event is added to the database under the Events table -->
<div id="group-focus" class="group-focus group">
	{#each data.events as event}
		<div
			tabindex="-1"
			class="collapse bg-warning text-primary-content focus:bg-secondary focus:text-secondary-content"
		>
			<div class="collapse-title">{event.event_title}</div>
			<div class="collapse-content">
				<p>{event.event_information}</p>
			</div>
		</div>
		<div class="divider divider-secondary"></div>
	{/each}
</div>

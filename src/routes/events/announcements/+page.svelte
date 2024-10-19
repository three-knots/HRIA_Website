<script>
	export let data;
</script>

<ul></ul>

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

<div class="join">
	<input
		class="btn btn-square join-item"
		type="radio"
		name="options"
		aria-label="1"
		checked="checked"
	/>
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="2" />
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="3" />
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="4" />
</div>

<div id="group-focus" class="group-focus group">
	<div
		tabindex="-1"
		class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
	>
		<div class="collapse-title">Focus me to see content</div>
		<div class="collapse-content">
			<p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	</div>

	<div
		tabindex="-1"
		class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
	>
		<div class="collapse-title">Focus me to see content</div>
		<div class="collapse-content">
			<p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	</div>

	<div
		tabindex="-1"
		class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
	>
		<div class="collapse-title">Focus me to see content</div>
		<div class="collapse-content">
			<p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	</div>

	<div
		tabindex="-1"
		class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
	>
		<div class="collapse-title">Focus me to see content</div>
		<div class="collapse-content">
			<p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	</div>

	<div
		tabindex="-1"
		class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
	>
		<div class="collapse-title">Focus me to see content</div>
		<div class="collapse-content">
			<p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	</div>

	<div
		tabindex="-1"
		class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
	>
		<div class="collapse-title">Focus me to see content</div>
		<div class="collapse-content">
			<p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	</div>

	<div
		tabindex="-1"
		class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
	>
		<div class="collapse-title">Focus me to see content</div>
		<div class="collapse-content">
			<p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	</div>
</div>

<div class="join">
	<input
		class="btn btn-square join-item"
		type="radio"
		name="options"
		aria-label="1"
		checked="checked"
	/>
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="2" />
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="3" />
	<input class="btn btn-square join-item" type="radio" name="options" aria-label="4" />
</div>

<script lang="ts">
	import { onMount } from 'svelte';
</script>

<header>
	<nav>
		<ul class="nav-list">
			<li><a href="/">Home</a></li>
			<li><a href="/prayer-times">Prayer Times</a></li>
			<li><a href="/prayer-times/month">Monthly Prayer Times</a></li>
			<li><a href="/admin">Admin</a></li>
		</ul>
	</nav>
</header>

<slot />

<footer>
	<p>&copy; {new Date().getFullYear()} HRIA. All rights reserved.</p>
</footer>

<style>
	header {
		background-color: #f8f9fa;
		padding: 1rem;
	}
	.nav-list {
		list-style: none;
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}
	.nav-list li a {
		text-decoration: none;
		color: #333;
		font-weight: bold;
	}
	.nav-list li a:hover {
		color: #007bff;
	}
	footer {
		background-color: #f8f9fa;
		text-align: center;
		padding: 1rem;
		position: fixed;
		width: 100%;
		bottom: 0;
	}
</style>

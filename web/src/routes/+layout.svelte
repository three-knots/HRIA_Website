<script>
	import '../app.css';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/events">Events</a>
</nav>

<main>
	<slot />
</main>

<footer>
	<p>© 2023 HRIA Mosque. All rights reserved.</p>
</footer>

<style>
	nav {
		padding: 1rem;
		background-color: #f0f0f0;
	}
	nav a {
		margin-right: 1rem;
	}
	main {
		padding: 2rem;
	}
	footer {
		padding: 1rem;
		text-align: center;
		background-color: #f0f0f0;
	}
</style>

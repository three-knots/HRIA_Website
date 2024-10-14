<script>
	import '../app.css';
	import 'tailwindcss/tailwind.css';
	let { children } = $props();
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
			>
				<li><a>Item 1</a></li>
				<li>
					<a>Parent</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li>
				<li><a>Item 3</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl">HRIA</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/prayer-times">Prayer Times</a></li>
			<li>
				<details>
					<summary>Events</summary>
					<ul class="p-2">
						<li><a>Events</a></li>
						<li><a>Calendar</a></li>
						<li><a>Ramadan</a></li>
						<li><a>Eid</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>Sisters</summary>
					<ul class="p-2">
						<li><a>Sisters</a></li>
						<li><a>Events</a></li>
						<li><a>Lessons</a></li>
						<li><a>Community</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>Youth</summary>
					<ul class="p-2">
						<li><a>Youth</a></li>
						<li><a>Madrassa</a></li>
						<li><a>Sports</a></li>
						<li><a>Community</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>About</summary>
					<ul class="p-2">
						<li><a href="/about">About</a></li>
						<li><a>Imam</a></li>
						<li><a>Contact</a></li>
						<li><a>Location</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>Donations</summary>
					<ul class="p-2">
						<li><a>Donations</a></li>
						<li><a>One Time Donation</a></li>
						<li><a>Recurring Donations</a></li>
						<li><a>Zakat</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>Community</summary>
					<ul class="p-2">
						<li><a>Community</a></li>
						<li><a>Group Activity Planning</a></li>
						<li><a>Tool Sharing</a></li>
						<li><a>Job Board</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn">Button</a>
	</div>
</div>

{@render children()}

<script>
	import Page from './../stories/Page.svelte';
	import '../app.css';
	import 'tailwindcss/tailwind.css';
	let { children } = $props();
</script>

<div class="navbar z-50 bg-base-100">
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
				class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
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
		<a href="/" class="btn btn-ghost text-xl">HRIA Home Page</a>
	</div>
	<div class="navbar-center z-50 hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/prayer-times">Prayer Times</a></li>
			<li>
				<details>
					<summary>Events</summary>
					<ul class="p-2">
						<li><a href="/events">Events</a></li>
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
						<li><a href="/sisters">Sisters</a></li>
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
						<li><a href="/youth">Youth</a></li>
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
						<li><a href="/donations">Donations</a></li>
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
						<li><a href="/community">Community</a></li>
						<li><a>Group Activity Planning</a></li>
						<li><a>Tool Sharing</a></li>
						<li><a>Job Board</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn m-1">
				Theme
				<svg
					width="12px"
					height="12px"
					class="inline-block h-2 w-2 fill-current opacity-60"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
				>
					<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
				</svg>
			</div>
			<ul tabindex="-1" class="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl">
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
						aria-label="Default"
						value="default"
					/>
				</li>
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
						aria-label="Bumblebee"
						value="bumblebee"
					/>
				</li>
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
						aria-label="Coffee"
						value="coffee"
					/>
				</li>
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
						aria-label="Luxury"
						value="luxury"
					/>
				</li>
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
						aria-label="Lemonade"
						value="lemonade"
					/>
				</li>
			</ul>
		</div>
	</div>
</div>

{@render children()}

<footer class="footer footer-center rounded bg-base-200 p-10 text-base-content">
	<nav class="grid grid-flow-col gap-4">
		<a class="link-hover link" href="/about">About us</a>
		<a class="link-hover link" href="/contact">Contact</a>
		<a class="link-hover link" href="/prayer-times">Prayer Times</a>
		<a class="link-hover link" href="/about/learn-islam">Learn About Islam</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a aria-label="Twitter" href="https://www.twitter.com/HighlandsRanchIslamicAssociation">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
					></path>
				</svg>
			</a>
			<a aria-label="YouTube" href="https://www.youtube.com/HighlandsRanchIslamicAssociation">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					></path>
				</svg>
			</a>
			<a aria-label="Instagram" href="https://www.instagram.com/HighlandsRanchIslamicAssociation">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 32 32"
					class="fill-current"
				>
					<path
						d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"
					></path>
				</svg>
			</a>
			<a aria-label="Facebook" href="https://www.facebook.com/HighlandsRanchIslamicAssociation">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					></path>
				</svg>
			</a>
			<a aria-label="WhatsApp" href="https://www.whatsapp.com/HighlandsRanchIslamicAssociation">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
					></path>
				</svg>
			</a>
		</div>
	</nav>
	<aside>
		<p>
			Copyright © {new Date().getFullYear()} - All right reserved by Highlands Ranch Islamic Association
		</p>
	</aside>
</footer>

<script>
	import googlePay from '$lib/assets/images/donations/google-pay-logo.svg';
	import applePay from '$lib/assets/images/donations/Apple_Pay-Logo.svg';
</script>

<div
	class="hero min-h-screen"
	style="background-image: url(https://images.unsplash.com/photo-1669868157919-1256bc8e095c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Donations</h1>
			<p class="mb-5">
				Please consider donating to help us continue our work. You can make a one-time donation
				below or help to ensure the long-term success of our community with recurring donations.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>

<div class="flex flex-wrap">
	<div class="card card-compact w-64 bg-base-100 shadow-xl">
		<figure class="bg-white">
			<img src={googlePay} alt="Google Pay" class="p-5" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Google Pay</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions">
				<button class="btn btn-primary">One-Time</button>
				<button class="btn btn-primary">Recurring</button>
			</div>
		</div>
	</div>
	<div class="card card-compact w-64 bg-base-100 shadow-xl">
		<figure class="bg-white">
			<img src={applePay} alt="Apple Pay" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">Apple Pay</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions">
				<button class="btn btn-primary">One-Time</button>
				<button class="btn btn-primary">Recurring</button>
			</div>
		</div>
	</div>
	<div class="card card-compact w-64 bg-base-100 shadow-xl">
		<figure>
			<img
				src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
				alt="Shoes"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">PayPal</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>
	<div class="card card-compact w-64 bg-base-100 shadow-xl">
		<figure>
			<img
				src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
				alt="Shoes"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">CashApp</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>
	<div class="card card-compact w-64 bg-base-100 shadow-xl">
		<figure>
			<img
				src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
				alt="Shoes"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">Zelle</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>
	<div class="card card-compact w-64 bg-base-100 shadow-xl">
		<figure>
			<img
				src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
				alt="Shoes"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">Venmo</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>
</div>

<script>
	import { Card } from '$lib/components/ui/card';
	import { CardHeader } from '$lib/components/ui/card';
	import { CardTitle } from '$lib/components/ui/card';
	import { CardDescription } from '$lib/components/ui/card';
	import { CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
</script>

<h1>About</h1>

<Card>
	<CardHeader>
		<CardTitle>About</CardTitle>
		<CardDescription>Here is some copy about the Masjid</CardDescription>
	</CardHeader>
	<CardContent>
		<Button href="/about/contact">Contact Us</Button>
	</CardContent>
</Card>

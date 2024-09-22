<script>
	import { Card } from '$lib/components/ui/card';
	import { CardHeader } from '$lib/components/ui/card';
	import { CardTitle } from '$lib/components/ui/card';
	import { CardDescription } from '$lib/components/ui/card';
	import { CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
</script>

>

<Card>
	<CardHeader>
		<CardTitle>Login</CardTitle>
		<CardDescription>Login to the site</CardDescription>
	</CardHeader>
	<CardContent>
		<Button href="/auth/login/github">Login with Github</Button>
	</CardContent>
</Card>

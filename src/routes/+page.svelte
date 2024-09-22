<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { CardHeader } from '$lib/components/ui/card';
	import { CardTitle } from '$lib/components/ui/card';
	import { CardDescription } from '$lib/components/ui/card';
	import { CardContent } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';

	const { data } = $props();
	const { userProfile } = data;
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');

	$effect(() => {
		if (userProfile) {
			firstName = userProfile.firstName;
			lastName = userProfile.lastName;
			email = userProfile.email;
		}
	});
	// # grab data from page.server
</script>

{#if userProfile}
	<Card>
		<CardHeader>
			<CardTitle>Welcome, {firstName}!</CardTitle>
			<CardDescription>You are logged in to the site!</CardDescription>
		</CardHeader>
		<CardContent>
			<Button href="/auth/logout">Logout of the site!</Button>
		</CardContent>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Manage your profile</CardTitle>
			<CardDescription>Click here to manage your profile</CardDescription>
		</CardHeader>
		<CardContent>
			<form
				method="post"
				use:enhance={({ formData }) => {
					formData.set('firstName', firstName);
					formData.set('lastName', lastName);
					formData.set('email', email);
					return ({ result }) => {
						if (result.type === 'success') {
							invalidate('/');
							alert('UPDATED!');
						} else {
							alert('ERROR!');
						}
					};
				}}
			>
				<div>
					<Label>Email</Label>
					<Input bind:value={email} />
				</div>
				<div>
					<Label>First Name</Label>
					<Input bind:value={firstName} />
				</div>
				<div>
					<Label>Last Name</Label>
					<Input bind:value={lastName} />
				</div>
				<div>
					<button type="submit">Update Profile</button>
				</div>
			</form>
		</CardContent>
	</Card>
{:else}
	<Button href="/auth/login">Login to the site!</Button>
{/if}

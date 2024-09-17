<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let tools = data.tools;
	let selectedTool: any = null;
	let chatMessages: any[] = [];
	let newMessage = '';

	// New tool form fields
	let newToolName = '';
	let newToolDescription = '';
	let newToolCondition = '';

	function selectTool(tool: any) {
		selectedTool = tool;
		// TODO: Fetch chat history for this tool
	}

	async function addTool() {
		const response = await fetch('/api/tools', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				owner_id: 1, // TODO: Replace with actual user ID
				category_id: 1, // TODO: Add category selection
				name: newToolName,
				description: newToolDescription,
				condition: newToolCondition
			})
		});

		if (response.ok) {
			const newTool = await response.json();
			tools = [...tools, newTool];
			newToolName = '';
			newToolDescription = '';
			newToolCondition = '';
		} else {
			console.error('Failed to add tool');
		}
	}

	function requestBorrow() {
		// TODO: Implement borrow request logic
	}

	function returnTool() {
		// TODO: Implement return request logic
	}

	function sendMessage() {
		if (newMessage.trim()) {
			// TODO: Implement send message logic
			chatMessages = [...chatMessages, { sender: 'You', message: newMessage }];
			newMessage = '';
		}
	}

	function uploadImage() {
		// TODO: Implement image upload logic
	}
</script>

<div class="tool-sharing">
	<div class="tool-list">
		<h2>Available Tools</h2>
		{#each tools as tool}
			<button
				class="tool-item"
				on:click={() => selectTool(tool)}
				on:keydown={(e) => e.key === 'Enter' && selectTool(tool)}
			>
				<h3>{tool.name}</h3>
				<p>{tool.description}</p>
				<p>Condition: {tool.condition}</p>
			</button>
		{/each}

		<h3>Add New Tool</h3>
		<form on:submit|preventDefault={addTool}>
			<input type="text" bind:value={newToolName} placeholder="Tool Name" required />
			<input type="text" bind:value={newToolDescription} placeholder="Description" required />
			<input type="text" bind:value={newToolCondition} placeholder="Condition" required />
			<button type="submit">Add Tool</button>
		</form>
	</div>

	{#if selectedTool}
		<div class="tool-details">
			<h2>{selectedTool.name}</h2>
			<img src={selectedTool.image} alt={selectedTool.name} />
			<p>{selectedTool.description}</p>
			<button on:click={requestBorrow}>Request to Borrow</button>
			<button on:click={returnTool}>Request Return</button>

			<div class="chat">
				<h3>Chat</h3>
				<div class="chat-messages">
					{#each chatMessages as message}
						<div class="message">
							<strong>{message.sender}:</strong>
							{message.message}
						</div>
					{/each}
				</div>
				<div class="chat-input">
					<input type="text" bind:value={newMessage} placeholder="Type a message..." />
					<button on:click={sendMessage}>Send</button>
					<button on:click={uploadImage}>Upload Image</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.tool-sharing {
		display: flex;
	}
	.tool-list {
		width: 30%;
	}
	.tool-details {
		width: 70%;
	}
	.tool-item {
		cursor: pointer;
		border: 1px solid #ddd;
		margin-bottom: 10px;
		padding: 10px;
		background: none;
		text-align: left;
		width: 100%;
	}
	.chat-messages {
		height: 300px;
		overflow-y: auto;
		border: 1px solid #ddd;
		padding: 10px;
	}
	.chat-input {
		margin-top: 10px;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 20px;
	}
</style>

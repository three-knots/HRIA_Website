import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/tools');
	const tools = await response.json();

	return { tools };
};

import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data, error } = await supabase
		.from('Announcements')
		.select()
		.order('created_at', { ascending: false });

	if (error) {
		console.error('Error fetching announcements:', error);
		return {
			announcements: []
		};
	}

	return {
		announcements: data ?? []
	};
}

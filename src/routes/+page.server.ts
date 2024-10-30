import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async () => {
	const { data, error } = await supabase
		.from("Announcements")
		.select("*")
		.order("created_at", { ascending: false })
		.limit(3);

	if (error) {
		console.error("Error fetching announcements:", error);
		return {
			announcements: [],
		};
	}

	return {
		announcements: data ?? [],
	};
};

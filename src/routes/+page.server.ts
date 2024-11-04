import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async () => {
	const { data: announcementsData, error: announcementsError } =
		await supabase
			.from("Announcements")
			.select("*")
			.order("created_at", { ascending: false })
			.limit(5);

	if (announcementsError) {
		console.error("Error fetching announcements:", announcementsError);
		return {
			announcements: [],
		};
	}
	const { data: eventsData, error: eventsError } = await supabase
		.from("Events")
		.select("*")
		.order("event_date", { ascending: true })
		.limit(3);

	if (eventsError) {
		console.error("Error fetching events:", eventsError);
		return {
			events: [],
		};
	}

	// Fetch iqama times
	const { data: iqamaData, error: iqamaError } = await supabase
		.from("Iqama")
		.select();

	if (iqamaError) {
		console.error("Error fetching iqama times:", iqamaError);
		// Optionally, you can handle this error as needed
	}

	return {
		announcements: announcementsData ?? [],
		events: eventsData ?? [],
		iqama: iqamaData ?? [],
	};
};

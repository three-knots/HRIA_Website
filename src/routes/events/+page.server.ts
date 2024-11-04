import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async () => {
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

    return {
        events: eventsData ?? [],
    };
};

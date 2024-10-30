import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const { data: cityData, error: cityError } = await supabase
        .from("Masjid_Information")
        .select("value")
        .eq("description", "city")
        .single();

    const { data: countryData, error: countryError } = await supabase
        .from("Masjid_Information")
        .select("value")
        .eq("description", "country")
        .single();

    if (cityError || countryError) {
        console.error(
            "Error fetching location data:",
            cityError || countryError,
        );
        return {
            city: "Highlands Ranch", // fallback default
            country: "US", // fallback default
        };
    }

    return {
        city: cityData?.value || "Highlands Ranch",
        country: countryData?.value || "US",
    };
};

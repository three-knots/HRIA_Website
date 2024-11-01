import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
    // Fetch city data
    const { data: cityData, error: cityError } = await supabase
        .from("information")
        .select("answer")
        .eq("description", "city")
        .single();

    console.log("City Data:", cityData);
    console.log("City Error:", cityError);

    // Fetch country data
    const { data: countryData, error: countryError } = await supabase
        .from("information")
        .select("answer")
        .eq("description", "country")
        .single();

    console.log("Country Data:", countryData);
    console.log("Country Error:", countryError);

    // Handle errors for location data
    if (cityError || countryError) {
        console.error(
            "Error fetching location data:",
            cityError || countryError,
        );
        throw error(500, "Failed to load location data.");
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
        city: cityData,
        country: countryData,
        iqama: iqamaData ?? [],
    };
};

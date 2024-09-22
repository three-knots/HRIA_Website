import { db } from "$lib/db";
import { error } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { profileTable } from "$lib/db/schema";


export const getOrCreateUserProfile = async (locals: App.Locals) => {
    const {user} = await locals.safeGetSession();

    if (!user) {
        return null;
    }
    
    const curlProfile = await db.query.profileTable.findFirst({
        where: eq(profileTable.id, user.id)
    })

    if (curlProfile) {
        return curlProfile;
    }

    await db.insert(profileTable).values({
        id: user.id,
        firstName: "",
        lastName: "",
        email: user.email ?? "",
    });

    const newProfile = await db.query.profileTable.findFirst({
        where: eq(profileTable.id, user.id)
    });

    if (!newProfile) {
        throw error(500, "Failed to create profile");
    }

    return newProfile;
    
}
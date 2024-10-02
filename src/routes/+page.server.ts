import { getOrCreateUserProfile } from "$lib/auth";
import { db } from "$lib/db/index.ts";
import { error } from "@sveltejs/kit";
import { zfd } from "zod-form-data";
import { eq } from "drizzle-orm";
import { profileTable, homePageTable } from "$lib/db/schema.ts";

export const load = async ({ locals }) => {
	const userProfile = await getOrCreateUserProfile(locals);
	
	// Fetch data from the 'Home Page' table
	const homePageData = await db.select().from(homePageTable);
	
	return { userProfile, homePageData }
}   

export const actions = {
	default: async ({ request, locals }) => {
		const userProfile = await getOrCreateUserProfile(locals);

		if (!userProfile) {
			throw error(401, "You need to be logged in to view this page.")
		}

		const schema = zfd.formData({
			firstName: zfd.text(),
			lastName: zfd.text(),
			email: zfd.text(),
		});

		const formData = await request.formData();
		const result = schema.safeParse(formData);

		if (!result.success) {
			throw error(400, "Invalid form data");
		}

		const { firstName, lastName, email } = result.data;

		await db.update(profileTable)
			.set({
				firstName,
				lastName,
				email,
			})
			.where(eq(profileTable.id, userProfile.id));

		return { success: true }
	}
}
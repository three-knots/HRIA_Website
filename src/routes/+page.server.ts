import { getOrCreateUserProfile } from "$lib/auth";
import { db } from "$lib/db/index.js";
import { error } from "@sveltejs/kit";
import { zfd } from "zod-form-data";
import { eq } from "drizzle-orm";
import { profileTable } from "$lib/db/schema.js";

export const load = async ({locals}) => {
  const userProfile = await getOrCreateUserProfile(locals);  
  return { userProfile }
}   

export const actions = {
  default: async ({request, locals}) => {
    const userProfile = await getOrCreateUserProfile(locals);

    if (!userProfile) {
    error(401, "You need to be logged in to view this page.")
  }

  const schema = zfd.formData({
    firstName: zfd.text(),
    lastName: zfd.text(),
    email: zfd.text(),
  });

  const {data} = schema.safeParse(await request.formData());

  if (!data) {
    error(400,"Invalid form data");
  } 

  await db.update(profileTable).set({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  }).where(eq(profileTable.id, userProfile.id));

  return {success: true}

  const formData = await request.formData();
  const { firstName, lastName, email } = schema.parse(formData);
  
  
}
}
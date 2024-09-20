import type { RequestHandler } from './$types';
import { query } from '$lib/db';

export const POST: RequestHandler = async ({ request, headers }) => {
	const token = headers.get('authorization')?.replace('Bearer ', '');
	const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN;

	if (token !== ADMIN_TOKEN) {
		return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
	}

	try {
		const { name, address, admin_email, contact_method, donation_links, iqama_times } =
			await request.json();

		// Check if masjid info already exists
		const existing = await query('SELECT * FROM masjid LIMIT 1');

		if (existing.rows.length > 0) {
			// Update existing record
			await query(
				`UPDATE masjid SET name = $1, address = $2, admin_email = $3, contact_method = $4, donation_links = $5, iqama_times = $6 WHERE id = $7`,
				[
					name,
					address,
					admin_email,
					contact_method,
					donation_links,
					iqama_times,
					existing.rows[0].id
				]
			);
		} else {
			// Insert new record
			await query(
				`INSERT INTO masjid (name, address, admin_email, contact_method, donation_links, iqama_times) VALUES ($1, $2, $3, $4, $5, $6)`,
				[name, address, admin_email, contact_method, donation_links, iqama_times]
			);
		}

		return new Response(JSON.stringify({ message: 'Masjid information updated successfully.' }), {
			status: 200
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: 'Failed to update masjid information.' }), {
			status: 500
		});
	}
};

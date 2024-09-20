import type { RequestHandler } from './$types';
import { query } from '$lib/db';

export const GET: RequestHandler = async () => {
	try {
		const res = await query('SELECT * FROM masjid LIMIT 1');
		if (res.rows.length === 0) {
			return new Response(JSON.stringify({ message: 'No masjid information found.' }), {
				status: 404
			});
		}
		return new Response(JSON.stringify(res.rows[0]), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch masjid information.' }), {
			status: 500
		});
	}
};

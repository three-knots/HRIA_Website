import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { query } from '$lib/db';

export const GET: RequestHandler = async () => {
	try {
		const result = await query('SELECT * FROM tools');
		return json(result.rows);
	} catch (error) {
		console.error('Error fetching tools:', error);
		return json({ error: 'Failed to fetch tools' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request }) => {
	const { owner_id, category_id, name, description, condition } = await request.json();
	try {
		const result = await query(
			'INSERT INTO tools (owner_id, category_id, name, description, condition) VALUES ($1, $2, $3, $4, $5) RETURNING *',
			[owner_id, category_id, name, description, condition]
		);
		return json(result.rows[0]);
	} catch (error) {
		console.error('Error creating tool:', error);
		return json({ error: 'Failed to create tool' }, { status: 500 });
	}
};

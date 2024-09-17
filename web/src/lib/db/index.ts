import pkg from 'pg';
const { Pool } = pkg;
import { Buffer } from 'buffer';

const connectionString =
	process.env.DATABASE_URL || 'postgres://hria_user:your_secure_password@db:5432/hria_db';
//TODO: Add Secure Password

const pool = new Pool({ connectionString });

export async function query(text: string, params?: any[]) {
	const client = await pool.connect();
	try {
		const result = await client.query(text, params);
		return result;
	} finally {
		client.release();
	}
}

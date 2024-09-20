import { Pool } from 'pg';

const pool = new Pool({
	connectionString: import.meta.env.VITE_DATABASE_URL
});

export const query = (text: string, params?: any[]) => pool.query(text, params);

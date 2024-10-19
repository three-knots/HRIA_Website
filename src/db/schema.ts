import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
export const Announcements = pgTable('announcements', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	createdAt: varchar({ length: 255 }).notNull(),
	announcementSubject: varchar({ length: 255 }).notNull(),
	announcementBody: varchar({ length: 255 }).notNull()
});

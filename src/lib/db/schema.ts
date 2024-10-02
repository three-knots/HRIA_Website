import { pgTable, uuid, timestamp, varchar } from "drizzle-orm/pg-core";

export const profileTable = pgTable("profile", {
  id: uuid("id").primaryKey(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const homePageTable = pgTable("Home Page", {
  id: uuid("id").primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  CardTitle: varchar("CardTitle"),
  CardDescription: varchar("CardDescription"),
  CardContent: varchar("CardContent"),
});

// #TODO: make mroe relevant tables


import {
  pgTable,
  serial,
  integer,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const gradingModeEnum = pgEnum("grading_mode", [
  "strict",
  "loose",
  "ai",
]);

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const decksTable = pgTable("decks_table", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const cardsTable = pgTable("cards_table", {
  id: serial("id").primaryKey(),
  deckId: integer("deck_id")
    .notNull()
    .references(() => decksTable.id, { onDelete: "cascade" }),
  front: text("front").notNull(),
  back: text("back").notNull(),
  gradingMode: gradingModeEnum("grading_mode").notNull().default("loose"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Relations
export const usersRelations = relations(usersTable, ({ many }) => ({
  decks: many(decksTable),
}));

export const decksRelations = relations(decksTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [decksTable.userId],
    references: [usersTable.id],
  }),
  cards: many(cardsTable),
}));

export const cardsRelations = relations(cardsTable, ({ one }) => ({
  deck: one(decksTable, {
    fields: [cardsTable.deckId],
    references: [decksTable.id],
  }),
}));

// Types
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertDeck = typeof decksTable.$inferInsert;
export type SelectDeck = typeof decksTable.$inferSelect;

export type InsertCard = typeof cardsTable.$inferInsert;
export type SelectCard = typeof cardsTable.$inferSelect;

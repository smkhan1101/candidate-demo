import { pgTable, serial, text, timestamp, vector, index } from 'drizzle-orm/pg-core';

// Define the jobs table
export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  embedding: vector('embedding', { dimensions: 1536 }),
  created_at: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  jobsEmbeddingIndex: index('jobsEmbeddingIndex').using('hnsw', table.embedding.op('vector_cosine_ops')),
}));

// Define the candidates table
export const candidates = pgTable('candidates', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  summary: text('summary').notNull(),
  embedding: vector('embedding', { dimensions: 1536 }),
  created_at: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  candidatesEmbeddingIndex: index('candidatesEmbeddingIndex').using('hnsw', table.embedding.op('vector_cosine_ops')),
}));

// Export types for TypeScript
export type Job = typeof jobs.$inferSelect;
export type NewJob = typeof jobs.$inferInsert;

export type Candidate = typeof candidates.$inferSelect;
export type NewCandidate = typeof candidates.$inferInsert; 
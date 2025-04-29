import { Injectable, Inject } from '@nestjs/common';
import { DATABASE_CONFIG, DatabaseConfig } from '../db';
import { candidates } from '../db/schema';
import { eq, sql, desc, gt } from 'drizzle-orm';
import { generateMockEmbedding } from 'src/utils/mockVectors';

@Injectable()
export class CandidatesService {
  private db;

  constructor(
    @Inject(DATABASE_CONFIG) private readonly dbConfig: DatabaseConfig,
  ) {
    this.db = dbConfig.getDb();
  }

  async findAll() {
    return this.db.select().from(candidates);
  }

  async findOne(id: number) {
    const result = await this.db.select().from(candidates).where(eq(candidates.id, id));
    return result[0];
  }

  async create(data: any) {
    data.summary = data.skills;
    const embedding = generateMockEmbedding(data.skills);
    const result = await this.db.insert(candidates).values({...data, embedding}).returning();
    return result[0];
  }

  async update(id: number, data: any) {
    const result = await this.db
      .update(candidates)
      .set(data)
      .where(eq(candidates.id, id))
      .returning();
    return result[0];
  }

  async remove(id: number) {
    const result = await this.db
      .delete(candidates)
      .where(eq(candidates.id, id))
      .returning();
    return result[0];
  }

  async findTopMatches(embedding: number[]) {
    // Format the embedding array as a PostgreSQL vector string
    const vectorStr = embedding.join(',');
    const similarity = sql<number>`1 - (${candidates.embedding} <=> array[${sql.raw(vectorStr)}]::vector)`;
    
    return this.db
      .select({
        id: candidates.id,
        name: candidates.name,
        summary: candidates.summary,
        created_at: candidates.created_at,
        similarity
      })
      .from(candidates)
      .where(gt(similarity, 0.5))
      .orderBy(desc(similarity))
      .limit(5);
  }

  async searchByName(name: string) {
    return this.db
      .select()
      .from(candidates)
      .where(sql`LOWER(${candidates.name}) LIKE LOWER(${'%' + name + '%'})`)
      .orderBy(desc(candidates.created_at));
  }
} 
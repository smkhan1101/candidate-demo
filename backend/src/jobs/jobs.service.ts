import { Injectable, Inject } from '@nestjs/common';
import { DATABASE_CONFIG, DatabaseConfig } from '../db';
import { jobs } from '../db/schema';
import { eq } from 'drizzle-orm';
import { generateMockEmbedding } from 'src/utils/mockVectors';

@Injectable()
export class JobsService {
  private db;

  constructor(
    @Inject(DATABASE_CONFIG) private readonly dbConfig: DatabaseConfig,
  ) {
    this.db = dbConfig.getDb();
  }

  async findAll() {
    return this.db.select().from(jobs);
  }

  async findOne(id: number) {
    const result = await this.db.select().from(jobs).where(eq(jobs.id, id));
    return result[0];
  }

  async create(data: any) {
    const embedding = generateMockEmbedding(data.description);
    const result = await this.db.insert(jobs).values({...data, embedding}).returning();
    return result[0];
  }

  async update(id: number, data: any) {
    const result = await this.db
      .update(jobs)
      .set(data)
      .where(eq(jobs.id, id))
      .returning();
    return result[0];
  }

  async remove(id: number) {
    const result = await this.db
      .delete(jobs)
      .where(eq(jobs.id, id))
      .returning();
    return result[0];
  }
} 
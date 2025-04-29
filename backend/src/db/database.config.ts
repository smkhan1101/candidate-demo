import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

@Injectable()
export class DatabaseConfig {
  private pool: Pool;
  private db: ReturnType<typeof drizzle>;

  constructor(private configService: ConfigService) {
    const connectionString = this.configService.get<string>('DATABASE_URL');
    if (!connectionString) {
      throw new Error('DATABASE_URL is not defined in environment variables');
    }

    this.pool = new Pool({
      connectionString,
      ssl: false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    this.pool.on('connect', () => {
      console.log('Database connected successfully');
    });

    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });

    this.db = drizzle(this.pool, { schema });
  }

  getDb() {
    return this.db;
  }
} 
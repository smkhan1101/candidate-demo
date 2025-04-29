import { Global, Module } from '@nestjs/common';
import { DatabaseConfig } from './database.config';
import { DATABASE_CONFIG } from './index';

@Global()
@Module({
  providers: [
    {
      provide: DATABASE_CONFIG,
      useClass: DatabaseConfig,
    },
  ],
  exports: [DATABASE_CONFIG],
})
export class DatabaseModule {} 
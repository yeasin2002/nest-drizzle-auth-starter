import { neon } from '@neondatabase/serverless';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schemas';

@Injectable()
export class DbService implements OnModuleInit {
  public db: ReturnType<typeof drizzle>;

  constructor() {
    const sql = neon(process.env.DATABASE_URL!);
    this.db = drizzle(sql, { schema });
  }

  async onModuleInit() {
    console.log('Database connection initialized');
  }
}

import { Injectable } from '@nestjs/common';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { openAPI } from 'better-auth/plugins';
import { DbService } from '../db/db.service';
import * as schema from '../db/schemas';

@Injectable()
export class AuthService {
  public auth: ReturnType<typeof betterAuth>;

  constructor(private dbService: DbService) {
    this.auth = betterAuth({
      database: drizzleAdapter(this.dbService.db, {
        provider: 'pg',
        schema: {
          user: schema.user,
          session: schema.session,
          account: schema.account,
          verification: schema.verification,
        },
      }),
      emailAndPassword: {
        enabled: true,
      },
      secret: process.env.BETTER_AUTH_SECRET,
      baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',

      plugins: [openAPI()],
    });
  }

  getAuth() {
    return this.auth;
  }
}

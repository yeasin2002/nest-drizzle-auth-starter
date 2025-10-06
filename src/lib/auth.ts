/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type BetterAuthOptions, betterAuth } from 'better-auth';
// import { drizzleAdapter } from 'better-auth/adapters/drizzle';
// import { db } from '../db';
// import * as schema from '../db/schema/auth';

// import { checkout, polar, portal } from "@polar-sh/better-auth";
// import { polarClient } from "./payments";

export const auth = betterAuth<BetterAuthOptions>({
  //   database: drizzleAdapter(db, {
  //     provider: 'pg',
  //     schema: schema,
  //   }),
  trustedOrigins: [process.env.CORS_ORIGIN || '', 'mybettertapp://', 'exp://'],
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
    },
  },
  plugins: [],
});

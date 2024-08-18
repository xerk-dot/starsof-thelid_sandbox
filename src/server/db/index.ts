import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";

//query against the drizzle database
import * as schema from "./schema";

// use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema });
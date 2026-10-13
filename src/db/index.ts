import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL belum diisi di file .env');
}

// Untuk Supabase Transaction pooler (port 6543 / pgbouncer=true)
// WAJIB pakai { prepare: false } karena prepared statement tidak didukung.
// Untuk Direct connection (port 5432, server long-running seperti Bun/Elysia)
// boleh tetap pakai { prepare: false } — aman untuk keduanya.
const client = postgres(process.env.DATABASE_URL, { prepare: false });

export const db = drizzle({ client });
export { client };

import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  // Hanya kelola schema `public`. Tanpa ini drizzle-kit menganggap skema internal
  // Supabase (auth, storage, realtime, vault, extensions) sebagai tabel yg harus di-drop.
  schemaFilter: ['public'],
  dbCredentials: {
    // drizzle-kit push/generate/migrate harus pakai DIRECT_URL (session pooler :5432),
    // bukan transaction pooler :6543 — kalau tidak, koneksi menggantung.
    url: (process.env.DIRECT_URL ?? process.env.DATABASE_URL)!,
  },
});

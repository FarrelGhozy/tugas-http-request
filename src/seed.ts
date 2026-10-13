import 'dotenv/config';
import { eq } from 'drizzle-orm';
import { db, client } from './db';
import { usersTable } from './db/schema';

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };

  // Hapus dulu kalau email sudah ada (biar bisa run berulang tanpa error unique)
  await db.delete(usersTable).where(eq(usersTable.email, user.email));

  await db.insert(usersTable).values(user);
  console.log('New user created!');

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users);
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({ age: 31 })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!');

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!');

  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

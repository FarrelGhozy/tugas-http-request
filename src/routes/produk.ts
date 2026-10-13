import { Elysia } from "elysia";
import { db } from "../db/index";
import { produkTable } from "../db/schema";
import { eq } from "drizzle-orm";

export const produkRoute = new Elysia({
  prefix: "/produk",
});

// READ - ambil semua produk
produkRoute.get("/", async () => {
  const data = await db.select().from(produkTable);
  return data;
});

// READ - ambil satu produk berdasarkan id
produkRoute.get("/:id", async ({ params }) => {
  const id = Number(params.id);
  const data = await db
    .select()
    .from(produkTable)
    .where(eq(produkTable.id, id));
  return data;
});

// 1. CREATE produk
produkRoute.post("/", async ({ body }) => {
  const { name, description, price, stock, category } = body as any;
  const data = await db
    .insert(produkTable)
    .values({ name, description, price, stock, category })
    .returning();
  return data;
});

// 3. UPDATE produk (ganti seluruh data)
produkRoute.put("/:id", async ({ params, body }) => {
  const id = Number(params.id);
  const { name, description, price, stock, category } = body as any;
  const data = await db
    .update(produkTable)
    .set({ name, description, price, stock, category })
    .where(eq(produkTable.id, id))
    .returning();
  return data;
});

// 3. UPDATE produk (ubah sebagian data)
produkRoute.patch("/:id", async ({ params, body }) => {
  const id = Number(params.id);
  const data = await db
    .update(produkTable)
    .set(body as any)
    .where(eq(produkTable.id, id))
    .returning();
  return data;
});

// 4. DELETE produk
produkRoute.delete("/:id", async ({ params }) => {
  const id = Number(params.id);
  const data = await db
    .delete(produkTable)
    .where(eq(produkTable.id, id))
    .returning();
  return data;
});

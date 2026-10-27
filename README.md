# Tugas Web Lanjutan — CRUD Produk (Svelte + Elysia + Supabase)

**Nama:** Farrel Ghozy Affifudin
**NIM:** 452024611053

Aplikasi CRUD **Produk** sederhana. Backend pakai **Bun + Elysia + Drizzle** (database Supabase Postgres), frontend pakai **Svelte + Vite + Tailwind**.

Tampilan: header `Tugas Web Lanjutan menggunakan Svelte`, form input di kiri, data produk dari database di kanan.

## Cara Menjalankan

Butuh 2 terminal (backend + frontend).

```bash
# Terminal 1 — backend (port 3006)
bun install
bun run dev
```

```bash
# Terminal 2 — frontend (port 5173)
cd frontend
bun install
bun run dev
```

Buka `http://localhost:5173`.

## Endpoint Produk

| Method | Endpoint | Kegunaan |
| ------ | -------- | -------- |
| GET | `/produk` | Ambil semua produk |
| GET | `/produk/:id` | Ambil satu produk |
| POST | `/produk` | Tambah produk |
| PUT | `/produk/:id` | Ubah semua field produk |
| PATCH | `/produk/:id` | Ubah sebagian field produk |
| DELETE | `/produk/:id` | Hapus produk |

Contoh:

```bash
curl http://localhost:3006/produk

curl -X POST http://localhost:3006/produk \
  -H "Content-Type: application/json" \
  -d '{"name":"Kopi Susu","price":20000,"stock":10,"category":"Minuman","description":"Best seller"}'
```

Field produk: `name, category, price, stock, description`.

## Struktur Folder

```text
src/
  index.ts          # app Elysia + CORS
  db/schema.ts      # tabel produk
  routes/produk.ts  # CRUD /produk
frontend/
  src/App.svelte              # layout header + 2 kolom
  src/lib/api.js              # fetch ke backend
  src/lib/ProductForm.svelte  # form kiri
  src/lib/ProductList.svelte  # tabel kanan
```

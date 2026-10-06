# Tugas Web Lanjutan — Pertemuan 3

**Nama:** Farrel Ghozy Affifudin
**NIM:** 452024611053

API sederhana data mahasiswa pakai **Bun + Elysia**.

## Cara Menjalankan

```bash
bun install
bun dev
```

Server: `http://localhost:3006/mahasiswa`

## Endpoint

| Method | Endpoint | Kegunaan |
| ------ | -------- | -------- |
| GET | `/mahasiswa` | Ambil semua data |
| GET | `/mahasiswa/:id` | Ambil satu data |
| POST | `/mahasiswa` | Tambah data |
| PUT | `/mahasiswa/:id` | Ubah semua data |
| PATCH | `/mahasiswa/:id` | Ubah sebagian data |
| DELETE | `/mahasiswa/:id` | Hapus data |
| CONNECT | `/mahasiswa/:id` | Cek data |

Contoh:

```bash
curl http://localhost:3006/mahasiswa
```

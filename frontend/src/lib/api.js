// Semua akses ke backend Elysia ada di sini.
// Backend jalan di http://localhost:3006, prefix /produk

const BASE = "http://localhost:3006/produk";

export async function getProducts() {
  const res = await fetch(BASE);
  return res.json();
}

export async function createProduct(data) {
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateProduct(id, data) {
  const res = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE}/${id}`, { method: "DELETE" });
  return res.json();
}

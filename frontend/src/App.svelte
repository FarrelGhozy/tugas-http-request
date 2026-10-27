<script>
  import { onMount } from "svelte";
  import ProductForm from "./lib/ProductForm.svelte";
  import ProductList from "./lib/ProductList.svelte";
  import { getProducts, createProduct, updateProduct, deleteProduct } from "./lib/api.js";

  let products = $state([]);
  let editing = $state(null);
  let loading = $state(true);
  let saving = $state(false);

  async function load() {
    loading = true;
    products = await getProducts();
    loading = false;
  }

  onMount(load);

  // Dipanggil form kiri saat klik Simpan / Update
  async function handleSave(data) {
    saving = true;
    if (editing) {
      await updateProduct(editing.id, data);
      editing = null;
    } else {
      await createProduct(data);
    }
    saving = false;
    await load();
  }

  function handleEdit(p) {
    editing = p;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(p) {
    if (!confirm(`Hapus "${p.name}"?`)) return;
    await deleteProduct(p.id);
    await load();
  }
</script>

<header class="bg-slate-900 text-white">
  <div class="max-w-5xl mx-auto px-4 py-4">
    <h1 class="font-bold text-lg">Tugas Web Lanjutan menggunakan Svelte</h1>
    <p class="text-sm text-slate-300">CRUD Produk — Supabase via API Elysia</p>
  </div>
</header>

<main class="max-w-5xl mx-auto px-4 py-6 grid gap-6 lg:grid-cols-[360px_1fr] items-start">
  <ProductForm {editing} {saving} onSave={handleSave} onCancel={() => (editing = null)} />

  {#if loading}
    <p class="text-sm text-slate-500">Memuat data...</p>
  {:else}
    <ProductList {products} onEdit={handleEdit} onDelete={handleDelete} />
  {/if}
</main>

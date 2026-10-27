<script>
  // Form kiri: tambah produk baru, atau edit kalau `editing` diisi.
  let { editing = null, saving = false, onSave, onCancel } = $props();

  let name = $state("");
  let category = $state("");
  let price = $state("");
  let stock = $state("");
  let description = $state("");

  // Kalau user klik Edit, isi form dengan data produk itu.
  $effect(() => {
    name = editing?.name ?? "";
    category = editing?.category ?? "";
    price = editing?.price ?? "";
    stock = editing?.stock ?? "";
    description = editing?.description ?? "";
  });

  function submit(e) {
    e.preventDefault();
    onSave({
      name,
      category,
      description,
      price: Number(price),
      stock: Number(stock),
    });
  }
</script>

<form onsubmit={submit} class="bg-white rounded-xl border p-5 space-y-4">
  <h2 class="font-semibold text-lg">
    {editing ? "Edit Produk" : "Tambah Produk"}
  </h2>

  <label class="block text-sm">
    Nama
    <input bind:value={name} required placeholder="cth: Kopi Susu"
      class="mt-1 w-full border rounded-lg px-3 py-2" />
  </label>

  <label class="block text-sm">
    Kategori
    <input bind:value={category} required placeholder="cth: Minuman"
      class="mt-1 w-full border rounded-lg px-3 py-2" />
  </label>

  <div class="grid grid-cols-2 gap-3">
    <label class="block text-sm">
      Harga
      <input type="number" bind:value={price} required min="0"
        class="mt-1 w-full border rounded-lg px-3 py-2" />
    </label>
    <label class="block text-sm">
      Stok
      <input type="number" bind:value={stock} required min="0"
        class="mt-1 w-full border rounded-lg px-3 py-2" />
    </label>
  </div>

  <label class="block text-sm">
    Deskripsi
    <textarea bind:value={description} rows="3" placeholder="Deskripsi singkat..."
      class="mt-1 w-full border rounded-lg px-3 py-2"></textarea>
  </label>

  <div class="flex gap-2">
    <button disabled={saving}
      class="flex-1 bg-slate-900 text-white rounded-lg py-2 disabled:opacity-50">
      {saving ? "Menyimpan..." : editing ? "Update" : "Simpan"}
    </button>
    {#if editing}
      <button type="button" onclick={onCancel}
        class="px-4 border rounded-lg">Batal</button>
    {/if}
  </div>
</form>

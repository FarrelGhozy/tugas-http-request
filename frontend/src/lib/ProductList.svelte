<script>
  // List kanan: tampilkan semua produk + tombol Edit / Hapus.
  let { products = [], onEdit, onDelete } = $props();
</script>

<div class="bg-white rounded-xl border p-5">
  <h2 class="font-semibold text-lg mb-4">Data Produk ({products.length})</h2>

  {#if products.length === 0}
    <p class="text-sm text-slate-500">Belum ada data. Tambahkan lewat form di kiri.</p>
  {:else}
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left text-slate-500 border-b">
            <th class="py-2 pr-3">Nama</th>
            <th class="py-2 pr-3">Kategori</th>
            <th class="py-2 pr-3">Harga</th>
            <th class="py-2 pr-3">Stok</th>
            <th class="py-2 text-right">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {#each products as p (p.id)}
            <tr class="border-b last:border-0">
              <td class="py-2 pr-3 font-medium">
                {p.name}
                {#if p.description}
                  <div class="font-normal text-slate-500 text-xs">{p.description}</div>
                {/if}
              </td>
              <td class="py-2 pr-3">{p.category}</td>
              <td class="py-2 pr-3">Rp {p.price}</td>
              <td class="py-2 pr-3">{p.stock}</td>
              <td class="py-2 text-right whitespace-nowrap">
                <button onclick={() => onEdit(p)}
                  class="px-3 py-1 border rounded-lg mr-1">Edit</button>
                <button onclick={() => onDelete(p)}
                  class="px-3 py-1 bg-red-600 text-white rounded-lg">Hapus</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

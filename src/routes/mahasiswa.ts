import { Elysia } from "elysia";

export const mahasiswaRoutes = new Elysia({ prefix: "/mahasiswa" });

const mahasiswa = [
  { id: 1, name: "Farel Ghozy", email: "farel.ghozy@example.com" },
  { id: 2, name: "John Doe", email: "john.doe@example.com" },
];

mahasiswaRoutes.get("/", () => mahasiswa);

mahasiswaRoutes.get("/:id", ({ params }) => {
  return mahasiswa.find((m) => m.id === Number(params.id));
});

mahasiswaRoutes.post("/", ({ body }) => {
  const { name, email } = body as any;
  const data = { id: mahasiswa.length + 1, name, email };
  mahasiswa.push(data);
  return data;
});

mahasiswaRoutes.put("/:id", ({ params, body }) => {
  const { name, email } = body as any;
  const mhs = mahasiswa.find((m) => m.id === Number(params.id))!;
  mhs.name = name;
  mhs.email = email;
  return mhs;
});

mahasiswaRoutes.patch("/:id", ({ params, body }) => {
  const { name, email } = body as any;
  const mhs = mahasiswa.find((m) => m.id === Number(params.id))!;
  if (name) mhs.name = name;
  if (email) mhs.email = email;
  return mhs;
});

mahasiswaRoutes.delete("/:id", ({ params }) => {
  const index = mahasiswa.findIndex((m) => m.id === Number(params.id));
  const [hapus] = mahasiswa.splice(index, 1);
  return { message: "Data dihapus", data: hapus };
});

mahasiswaRoutes.connect("/:id", ({ params }) => {
  return mahasiswa.find((m) => m.id === Number(params.id));
});

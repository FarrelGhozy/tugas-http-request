import {Elysia} from "elysia";
import {cors} from "@elysiajs/cors";
import {mahasiswaRoutes} from "./routes/mahasiswa";
import {produkRoute} from "./routes/produk";

const app = new Elysia();

app.use(cors());
app.use(mahasiswaRoutes);
app.use(produkRoute);

app.listen(3006, () => {
  console.log("Server running on http://localhost:3006");
});
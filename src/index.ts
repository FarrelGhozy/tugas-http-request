import {Elysia} from "elysia";
import {mahasiswaRoutes} from "./routes/mahasiswa";

const app = new Elysia();

app.use(mahasiswaRoutes);

app.listen(3006, () => {
  console.log("Server running on http://localhost:3006");
});
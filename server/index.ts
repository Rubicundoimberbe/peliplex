import express, { Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

type Category = {
  name: string;
  destination: string;
};

const categories: Category[] = [
  { name: "Terror", destination: "https://www.terror.com" },
  { name: "Suspenso", destination: "https://www.suspenso.com" },
  { name: "Ciencia Ficción", destination: "https://www.ciencia-ficcion.com" },
  { name: "Fantasía", destination: "https://www.fantasia.com" },
  { name: "Acción", destination: "https://www.accion.com" },
];

app.get("/categories", (_req, res: Response) => {
  res.status(200).json({
    data: categories,
  });
});

app.listen(3000, () => {
  console.log("server listening on PORT 3000");
});

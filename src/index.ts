import express, { Express, Request, Response } from "express";
import { prisma } from "./prisma";

const app: Express = express();
const port = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

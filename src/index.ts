import express, { Express, Request, Response } from "express";
import { prisma } from "./prisma";

import { UserData } from "./types";

const app: Express = express();
const port = 4000;

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/users", async (req: Request<{}, {}, UserData>, res: Response) => {
  try {
    const { email, name } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

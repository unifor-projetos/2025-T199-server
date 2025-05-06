import express, { Express, Request, Response } from "express";
import bannerItemRouter from "./routes/bannerItem";

const app: Express = express();
const port = 4000;

app.use("/bannerItem", bannerItemRouter);

app.use("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

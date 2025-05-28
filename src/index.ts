import express, { Express, Request, Response } from "express";

import bannerItemRouter from "./routes/bannerItem";
import exhibitionItemRouter from "./routes/exhibitionItem";
import mapItemRouter from "./routes/mapItem";

import cors from "cors";
import morgan from "morgan";

const app: Express = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

app.use("/banners", bannerItemRouter);
app.use("/exhibitions", exhibitionItemRouter);
app.use("/map", mapItemRouter);

app.use("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

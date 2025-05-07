import { Request, Response, Router } from "express";
import { prisma } from "../prisma";
import { MapItemData } from "../types";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.mapItem.findMany();

    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post(
  "/",
  async (req: Request<{}, {}, MapItemData>, res: Response) => {
    try {
      const { name, x, y, description } = req.body;

      const user = await prisma.mapItem.create({
        data: {
          name,
          x,
          y,
          description,
        },
      });

      res.send(user);
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

router.put("/", async (req: Request, res: Response) => {
  try{
    const { name, id, x, y, description } = req.body;

    const updateUser = await prisma.mapItem.update({
      where: {
        id,
      },
      data: {
        name,
        x,
        y,
        description,
      },
    })

    res.send(updateUser)
  } catch (e) {
    res.status(500).send(e)
  }

});

router.delete("/", async (req: Request, res: Response) => {
  try{
    const { name, id, x, y, description } = req.body;

    const deleteUser = await prisma.mapItem.delete({
      where:{
        id,
        name,
        x,
        y,
        description,
      },
    })

    res.send(deleteUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default router;

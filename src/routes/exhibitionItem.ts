import { Request, Response, Router } from "express";
import { prisma } from "../prisma";
import { ExhibitionItemData } from "../types";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.exhibitionItem.findMany();

    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post(
  "/",
  async (req: Request<{}, {}, ExhibitionItemData>, res: Response) => {
    try {
      const { title, description ,date, imageUrl } = req.body;

      const user = await prisma.exhibitionItem.create({
        data: {
          title,
          description,
          date,
          imageUrl,
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
    const { title, description, date, imageUrl, id } = req.body;

    const updateUser = await prisma.exhibitionItem.update({
      where: {
        id,
      },
      data: {
        title, 
        description, 
        date,
        imageUrl,
      },
    })

    res.send(updateUser)
  } catch (e) {
    res.status(500).send(e)
  }

});

router.delete("/", async (req: Request, res: Response) => {
  try{
    const { title, description, date, imageUrl, id } = req.body;

    const deleteUser = await prisma.exhibitionItem.delete({
      where:{
        title,
        description,
        date,
        id,
        imageUrl,
      },
    })

    res.send(deleteUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default router;

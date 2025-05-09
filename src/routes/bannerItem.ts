import { Request, Response, Router } from "express";
import { prisma } from "../prisma";
import { BannerItemData } from "../types";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.bannerItem.findMany();

    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post(
  "/",
  async (req: Request<{}, {}, BannerItemData>, res: Response) => {
    try {
      const { imageUrl } = req.body;

      const user = await prisma.bannerItem.create({
        data: {
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
    const { imageUrl, id } = req.body;

    const updateUser = await prisma.bannerItem.update({
      where: {
        id,
      },
      data: {
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
    const { imageUrl, id } = req.body;

    const deleteUser = await prisma.bannerItem.delete({
      where:{
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

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const showFavorite = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: {
        user: true,
      },
    });
    if (!favorites) {
      return res.status(404).json({ message: "not book in Favorite" });
    }
    return res.status(200).json({ favorites: favorites });
  } catch (error) {
    console.error("failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

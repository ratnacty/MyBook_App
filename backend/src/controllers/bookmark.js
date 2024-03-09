import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const showBookmark = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const bookmarks = await prisma.bookmark.findMany({
      where: { userId },
      include: {
        user: true,
      },
    });
    if (!bookmarks) {
      return res.status(404).json({ message: "not book in bookmark" });
    }
    return res.status(200).json({ bookmarks: bookmarks });
  } catch (error) {
    console.error("failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

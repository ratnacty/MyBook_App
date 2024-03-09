import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const bookmark = async (req, res, next) => {
  const { googleId } = req.params;
  const userId = req.user.id;

  try {
    // Check if the bookmark already exists
    const existingBookmark = await prisma.bookmark.findUnique({
      where: {
        userId_googleId: {
          userId,
          googleId,
        },
      },
    });

    if (existingBookmark) {
      // Book is already bookmarked
      return res.status(409).json({ message: "Book is already bookmarked" });
    }

    // If not, add the book to bookmarks
    const newBookmark = await prisma.bookmark.create({
      data: {
        userId,
        googleId,
      },
    });

    res.json({ message: "Bookmarked successfully", bookmark: newBookmark });
  } catch (error) {
    console.error("Bookmarking failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const favorite = async (req, res, next) => {
  const { googleId } = req.params;
  const userId = req.user.id;

  try {
    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_googleId: {
          userId,
          googleId,
        },
      },
    });

    if (existingFavorite) {
      return res
        .status(409)
        .json({ message: "Book is already add to favorite" });
    }

    const newFavorite = await prisma.favorite.create({
      data: {
        userId,
        googleId,
      },
    });

    res.json({ message: "Add Favorite successfully", favorite: newFavorite });
  } catch (error) {
    console.error("favorite failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

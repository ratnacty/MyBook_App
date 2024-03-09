import express from "express";
import { PrismaClient } from "@prisma/client";
import { authToken } from "../middleware/auth.js";

import { register, login, logout } from "../controllers/user.js";
import { bookmark, favorite } from "../controllers/book.js";
import { showBookmark } from "../controllers/bookmark.js";
import { showFavorite } from "../controllers/favorite.js";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/bookmark/:googleId", authToken, bookmark);
router.get("/favorite/:googleId", authToken, favorite);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/show-bookmark", authToken, showBookmark);
router.get("/show-favorite", authToken, showFavorite);

export default router;

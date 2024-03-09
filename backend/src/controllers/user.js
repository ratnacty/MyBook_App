import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import { response } from "express";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // cek if email is unique
    const existingUser = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (existingUser) {
      return res.status(409).json({ message: "Email is already in use" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user in database
    const userData = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });
    res.status(200).json({ message: "USer registered succesfully", userData });
  } catch (error) {
    console.log("error during registration :", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// LOGIN
const jwtSecret = process.env.JWT_SECRET;

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "2d" });
    res.cookie("token", token, { httpOnly: true });

    console.log(token);
    return res.status(200).json({ message: "Login successful oii", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful woy" });
};

// src/controllers/authController.ts
import { Request, Response } from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import User from "../models/User";
import { signToken } from "../utils/jwt";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 12;
const TOKEN_MAX_AGE = Number(process.env.JWT_MAX_AGE_MS) || 1000 * 60 * 60; // 1h
const MAX_ACCOUNTS = Number(process.env.MAX_ACCOUNTS) || 1000;

const registerSchema = Joi.object({
  name: Joi.string().allow("").max(100),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: TOKEN_MAX_AGE,
};

export async function register(req: Request, res: Response) {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const nameRaw = value.name ?? "";
    const name = String(nameRaw).trim();
    const email = String(value.email).trim().toLowerCase();
    const password = value.password;

    const totalUsers = await User.countDocuments().exec();
    if (totalUsers >= MAX_ACCOUNTS) {
      return res.status(403).json({
        message: "Osiągnięto maksymalną liczbę kont. Rejestracja zablokowana.",
      });
    }

    const existing = await User.findOne({ email }).lean().exec();
    if (existing)
      return res.status(409).json({ message: "Email already in use" });

    const hashed = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({ name, email, password: hashed });

    const token = signToken({ id: user._id, email: user.email });

    res
      .cookie("token", token, cookieOptions)
      .status(201)
      .json({ id: user._id, email: user.email });
  } catch (err: any) {
    if (err && err.code === 11000) {
      return res.status(409).json({ message: "Email already in use" });
    }
    console.error("register error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

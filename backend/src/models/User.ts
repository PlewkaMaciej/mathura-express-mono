// src/models/User.ts
import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  email: string;
  password: string;
  name?: string;
}

interface IUserMethods {
  comparePassword(candidate: string): Promise<boolean>;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const UserSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    name: { type: String },
  },
  { timestamps: true }
);

UserSchema.method("comparePassword", async function (candidate: string) {
  return bcrypt.compare(candidate, this.password);
});

const User =
  (mongoose.models.User as UserModel) ||
  mongoose.model<IUser, UserModel>("User", UserSchema);
export default User;

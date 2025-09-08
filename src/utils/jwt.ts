import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? "1h";
export const JWT_MAX_AGE_MS =
  Number(process.env.JWT_MAX_AGE_MS) || 1000 * 60 * 60;

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET environment variable");
}

export type JwtPayload = {
  id?: string;
  email?: string;
};

export function signToken(payload: object): string {
  return jwt.sign(
    payload,
    JWT_SECRET as jwt.Secret,
    { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions
  );
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET as jwt.Secret) as JwtPayload;
}

export function tryVerify(token?: string | null): JwtPayload | null {
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}

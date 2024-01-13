import { Request } from "express";
export interface AuthRequest extends Request {
  userId?: string; // o el tipo que corresponda a tu identificador de usuario
}
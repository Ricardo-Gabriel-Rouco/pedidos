import { Response, NextFunction } from "express";
import {AuthRequest} from '../requestTypes'
import jwt from 'jsonwebtoken';




const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authorization = req.get("authorization");
  let token = '';
  
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  }

  let decodedToken: any = {};

  try {
    decodedToken = jwt.verify(token, process.env.SECRET_KEY || "prueba");
  } catch (error) {
    console.log(error);
  }

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'Token missing or invalid' });
  }

  const userId = decodedToken.id;

  req.userId = userId;
  next();
};

export default authMiddleware;

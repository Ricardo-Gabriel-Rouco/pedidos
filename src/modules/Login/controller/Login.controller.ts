import jwt from 'jsonwebtoken'
import { Request, Response } from "express";
import {
  createUser,
  logUser
} from '../service/Login.service'

export const logTheUser = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    const user = await logUser({ userName, password });
    if(user) {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

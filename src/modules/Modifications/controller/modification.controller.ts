import { Request, Response } from "express";
import {
  createModification,
  getModifiactionsByOrder,
  getModificationsByUserId,
} from "../services/Modifications.service";

const getModByUser = async (req: Request, res: Response) => {
  try {
    const result = await getModificationsByUserId(+req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getModByOrder = async (req: Request, res: Response) => {
  try {
    const result = await getModifiactionsByOrder(+req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createMod = async (req: Request, res: Response) => {
  try {
    const result = await createModification(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

export { getModByUser, getModByOrder, createMod };

import { Request, Response } from "express";
import {
  findAllUsers,
  findUsersById,
  findUsersByName,
} from "../Repositories/UserRepository";

export const getUsers = async (req: Request, res:Response) => {
  const { idOrName } = req.params;

  if (!isNaN(Number(idOrName))) {
    try {
      const user = await findUsersById(+idOrName);
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send(`No client with id ${idOrName}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  if (idOrName && isNaN(Number(idOrName))) {
    try {
      const user = await findUsersByName(idOrName);
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send(`No client with name ${idOrName}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  try {
    const users = await findAllUsers();
    if (users.length > 0) {
      return res.status(200).send(users);
    } else {
      return res.status(404).send("No users found");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
} 
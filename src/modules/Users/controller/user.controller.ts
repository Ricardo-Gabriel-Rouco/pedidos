import { Request, Response } from "express";
import {
  findAllUsers,
  findUsersById,
  findUsersByName,
  updateUser,
  deleteUser,
} from "../service/user.service";

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

export const updateUserById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const {body} = req;

  try {
    const updatedUser = await updateUser(id, body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteUserById = async (req: Request, res: Response) => {
  try {
    await deleteUser(+req.params.id);
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(400).send("User not found");
  }
};




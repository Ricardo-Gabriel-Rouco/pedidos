import { Request, Response } from "express";
import catchedAsync from "../../../utils/catchedAsync"
import {
  findAllUsers,
  findUsersById,
  findUsersByName,
  createUser,
  updateUser,
  deleteUser,
} from "../service/user.service";

const getUsers = async (req: Request, res:Response) => {
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

const updateUserById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const newData = req.body;

  try {
    const updatedUser = await updateUser(id, newData);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewUser = async (req: Request, res: Response) => {
  try {
    await createUser(req.body);
    res.status(200).send("user Created");
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    await deleteUser(+req.params.id);
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(400).send("User not found");
  }
};

const logUSer =  async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await getUsers(userName, password);
    if(user) {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  getUsers: catchedAsync(getUsers),
}
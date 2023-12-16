import express from "express";
import { getUsers } from "../old data/handlers/userHandler";
import {
  createUser,
  updateUser,
  deleteUser,
} from "../Repositories/UserRepository";

const server = express.Router();

server.get("/:idOrName?", getUsers);

server.put("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body;

  try {
    const updatedUser = await updateUser(id, newData);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.post("/user", async (req, res) => {
  try {
    await createUser(req.body);
    res.status(200).send("user Created");
  } catch (error) {
    res.status(400).send("oops I did it again");
  }
});

server.delete("/user/:id", async (req, res) => {
  try {
    await deleteUser(+req.params.id);
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(400).send("User not found");
  }
});

server.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await getUsers(userName, password);
    if(user) {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
})

export default server;

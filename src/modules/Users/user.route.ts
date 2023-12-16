import {Router} from "express";
import {
  getUsers,
  logUSer,
  createNewUser,
  deleteUserById,
  updateUserById
} from "./controller/user.controller"
const routerUser = Router();


// inputs
routerUser.post('/', createNewUser);
routerUser.post('/login', logUSer)
routerUser.put('/:id', updateUserById);
routerUser.delete('/:id', deleteUserById);

// outputs
routerUser.get("/:idOrName?", getUsers);

export default routerUser

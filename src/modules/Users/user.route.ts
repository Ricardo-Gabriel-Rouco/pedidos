import {Router} from "express";
import catchedAsync from "../../utils/catchedAsync"

import {
  getUsers,
  deleteUserById,
  updateUserById
} from "./controller/user.controller"
const routerUser = Router();


// inputs

routerUser.put('/:id', catchedAsync(updateUserById));
routerUser.delete('/:id', catchedAsync(deleteUserById));

// outputs
routerUser.get("/:idOrName?", catchedAsync(getUsers));

export default routerUser

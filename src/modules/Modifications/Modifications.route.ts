import { Router } from "express";
import userExtractor from "../../middlewares/userExtractor";
import catchedAsync from "../../utils/catchedAsync";
import {
  createMod,
  getModByOrder,
  getModByUser,
} from "./controller/modification.controller";

const routerMod = Router();

// inputs

routerMod.post("/", userExtractor, catchedAsync(createMod));

// outputs
routerMod
  .get("/user/:id", catchedAsync(getModByUser))
  .get("/order/:id", catchedAsync(getModByOrder));

export default routerMod;

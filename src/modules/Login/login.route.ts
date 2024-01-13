import { Router } from "express";
import catchedAsync from "../../utils/catchedAsync"

import {
  createNewUser,
  logTheUser
} from './controller/Login.controller'

const routerLogin = Router();

routerLogin
  .post('/', catchedAsync(logTheUser))
  .post('/register', catchedAsync(createNewUser))

export default routerLogin
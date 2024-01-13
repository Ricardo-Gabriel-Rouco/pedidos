import { Router } from "express";
const apiRouter = Router();

// importaciones de las rutas
import routerCostumer from "../modules/Costumers/costumer.route";
import routerOrder from "../modules/Orders/orders.route";
import routerUser from "../modules/Users/user.route";
import routerLogin from "../modules/Login/login.route";

// usamos las rutas
apiRouter
  .use("/costumer", routerCostumer)
  .use("/order", routerOrder)
  .use("/user", routerUser)
  .use("/login", routerLogin)

export default apiRouter;

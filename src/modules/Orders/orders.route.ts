import { Router } from "express";
import catchedAsync from "../../utils/catchedAsync"
import userExtractor from "../../middlewares/userExtractor";
import {
  createNewOrder,
  getOrderByCostumer,
  getOrderByUserId,
  getOrderUsingId,
  getOrders,
  updatePrevOrder
} from "./controller/order.controller";

const routerOrder = Router();

// inputs
routerOrder.post("/", userExtractor ,catchedAsync( createNewOrder));
routerOrder.put("/:id", userExtractor ,updatePrevOrder)

// outputs
routerOrder.get("/", catchedAsync(getOrders));
routerOrder.get("/:id", catchedAsync(getOrderUsingId));
routerOrder.get("/:costumerId", catchedAsync(getOrderByCostumer));
routerOrder.get("/user/:userId", catchedAsync(getOrderByUserId));

export default routerOrder;

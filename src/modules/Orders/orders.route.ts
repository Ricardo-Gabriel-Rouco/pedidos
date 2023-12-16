import { Router } from "express";
import {
  createNewOrder,
  getOrderByCostumer,
  getOrderByUserId,
  getOrderUsingId,
  getOrders,
} from "./controller/order.controller";

const routerOrder = Router();

// inputs
routerOrder.post("/", createNewOrder);

// outputs
routerOrder.get("/", getOrders);
routerOrder.get("/:id", getOrderUsingId);
routerOrder.get("/:costumerId", getOrderByCostumer);
routerOrder.get("/user/:userId", getOrderByUserId);

export default routerOrder;

import { Request, Response } from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByCustomer,
  getOrderByUser
} from "../service/order.service";


export const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await getAllOrders();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

export const getOrderUsingId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await getOrderById(+id);
    if (!order.length) {
      res.status(404).send("Not found");
    } else {
      res.status(200).send(order);
    }
  } catch (error) {
    res.status(400).send("Not found");
  }
}

export const getOrderByCostumer = async(req: Request, res: Response) => {
  try {
    const {costumerId} = req.params
    const orders = await getOrdersByCustomer(+costumerId)
    res.status(200).send(orders);
  }
  catch (error){
    res.status(400).send("Not found");
  }
}

export const getOrderByUserId = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params
    const orders = await getOrderByUser(+userId)
    res.status(200).send(orders);
  }
  catch (error){
    res.status(400).send("Not found");
  }
}

export const createNewOrder = async (req: Request, res: Response) => {
  try {
    const { userId, costumerId, order } = req.body;
    await createOrder(order, +userId, +costumerId);
    res.status(200).send("Order created");
  } catch (error) {
    res.status(400).send(error);
  }
}


import { Request, Response } from "express";
import { AuthRequest } from "../../../requestTypes";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByCustomer,
  getOrderByUser,
  updateOrder,
  deleteOrder
} from "../service/order.service";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await getAllOrders();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

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
};

export const getOrderByCostumer = async (req: Request, res: Response) => {
  try {
    const { costumerId } = req.params;
    const orders = await getOrdersByCustomer(+costumerId);
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send("Not found");
  }
};

export const getOrderByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orders = await getOrderByUser(+userId);
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send("Not found");
  }
};

export const createNewOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { costumerId, order } = req.body;
    const { userId } = req;

    const orderCreated = await createOrder(order, +userId, +costumerId);
    res.status(200).send(orderCreated);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updatePrevOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updatedOrder = await updateOrder(body, +id);
    res.status(200).send(updatedOrder);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrderByID = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const deletedOrder = await deleteOrder(+id);
    res.status(200).send(deletedOrder);
  } catch (error) {
    console.log(error);
  }
} 

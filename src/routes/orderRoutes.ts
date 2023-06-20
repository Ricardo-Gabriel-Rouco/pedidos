import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByCustomer,
  getOrderByUser
} from "../Repositories/OrderRepository";

const server = express.Router();

server.get("/orders", async (req, res) => {
  try {
    const result = await getAllOrders();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

server.get("/order/:id", async (req, res) => {
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
});

server.get('/orders/:costumerId', async(req, res) => {
  try {
    const {costumerId} = req.params
    const orders = await getOrdersByCustomer(+costumerId)
    res.status(200).send(orders);
  }
  catch (error){
    res.status(400).send("Not found");
  }
})

server.get('/orders/user/:userId', async (req, res) => {
  try {
    const {userId} = req.params
    const orders = await getOrderByUser(+userId)
    res.status(200).send(orders);
  }
  catch (error){
    res.status(400).send("Not found");
  }
})

server.post("/order", async (req, res) => {
  try {
    const { userId, costumerId, order } = req.body;
    await createOrder(order, +userId, +costumerId);
    res.status(200).send("Order created");
  } catch (error) {
    res.status(400).send(error);
  }
});

export default server;

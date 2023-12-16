import { AppDataSource } from "../../../data-source";
import { Costumer } from "../../Costumers/costumer.model";
import { Order } from "../order.model";
import { User } from "../../Users/user.model";

import { toNewOrder } from "../../../utils";

const orderRepository = AppDataSource.getRepository(Order)
const costumerRepository = AppDataSource.getRepository(Costumer)
const userRepository = AppDataSource.getRepository(User)

export const getAllOrders = async() => {
  const orders = await orderRepository.find({
    relations: ['user', 'costumer']
  })
  return orders
}

export const getOrderById = async(orderId: number) =>{
  const order = orderRepository.find({
    where: {
      id: orderId
    },
    relations: ['user', 'costumer']
  })
  return order
}

export const getOrdersByCustomer = async (customerId: number) => {
const costumer = await costumerRepository.findOne({
  where: {
    id: customerId
  },
  relations: ["order"]
});

const orders = costumer.order;
return orders
};

export const getOrderByUser =  async (userId: number) => {
  const user = await userRepository.find({
    where: {
      id: userId
    },
    relations: ['orders']
  })

  const orders = user[0].orders
  return orders
}

export const createOrder = async (order: any, userId: number, costumerId: number) => {
  const currentUser = await userRepository.findOne({
    where: {
      id: userId
    }
  });

  const currentCostumer = await costumerRepository.findOne({
    where: {
      id: costumerId
    }
  });

  if (!currentCostumer || !currentUser) {
    throw new Error('Not found');
  }

  try {
    const newOrderToSave = toNewOrder(order, userId, costumerId);
    await orderRepository.save(newOrderToSave);
  } catch (error) {
    console.error('Error in toNewOrder:', error);
    throw error;
  }

  return order;
};

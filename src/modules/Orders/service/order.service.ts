import { AppDataSource } from "../../../data-source";
import { Costumer } from "../../Costumers/costumer.model";
import { Order } from "../order.model";
import { User } from "../../Users/user.model";

import { toNewOrder, updatedOrder } from "../../../utils";

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

  const newOrderToSave = toNewOrder(order, userId, costumerId);
  await orderRepository.save(newOrderToSave);

  return newOrderToSave;
};

export const updateOrder = async (updOrder: any, id:number) => {
    const newOrderData = updatedOrder(updOrder);
  
    const order = await orderRepository.find({
      where: {
        id
      },
    })
  
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }
  
    if (Object.keys(newOrderData).length === 0) {
      throw new Error("No valid properties found in newData");
    }


    const newDataOrder = await orderRepository.update(id, newOrderData)

    if (newDataOrder.affected === 1) {
      // Si se ha actualizado un registro
      const updatedOrder = await orderRepository.findOne({
        where: {
          id
        },
      });
      return updatedOrder;
      // Aquí, 'updatedOrder' contendría los datos actualizados
      // Puedes retornar o manejar 'updatedOrder' según tus necesidades
    } else {
      // Manejar el caso en el que no se haya actualizado ningún registro
      throw new Error(`Order with ID ${id} not found`);
    }
    
}

export const deleteOrder = async (id: number) => {

  const order = await orderRepository.find({
    where: {
      id
    }
  })

  if (!order) {
    throw new Error(`Order with ID ${id} not found`);
  }

  const deletedOrder = await orderRepository.update(id, {isDeleted: true});

  if (deletedOrder.affected === 1) {
    // Si se ha actualizado un registro
    const updatedOrder = await orderRepository.findOne({
      where: {
        id
      },
    });
    return updatedOrder;
    // Aquí, 'updatedOrder' contendría los datos actualizados
    // Puedes retornar o manejar 'updatedOrder' según tus necesidades
  } else {
    // Manejar el caso en el que no se haya actualizado ningún registro
    throw new Error(`Order with ID ${id} not found`);
  }

}
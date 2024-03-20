import { AppDataSource } from "../../../data-source";
import { OrderModification } from "../Modifications.model";

import { modificationType } from "../../../types";

const modificationService = AppDataSource.getRepository(OrderModification);

export const getModifiactionsByOrder = async (orderId: number) => {
  const modifications = await modificationService.find({
    where: {
      order: {
        id: orderId,
      },
    },
  });
  return modifications;
};

export const getModificationsByUserId = async (userId: number) => {
  const modifications = await modificationService.find({
    where: {
      user: {
        id: userId,
      },
    },
  });
  return modifications;
};

export const createModification = async (mod: modificationType) => {
  const newModification = await modificationService.save({
    ...mod,
  });
  return newModification;
};

import { Request, Response } from "express";
import {
  getAllCostumers,
  findCostumerById,
  findCostumerByName,
} from "../Repositories/CostumerRepository";

export const getCostumers = async (req: Request, res: Response) => {
  const { idOrName } = req.params;

  if (!isNaN(Number(idOrName))) {
    try {
      const costumer = await findCostumerById(+idOrName);
      if (costumer) {
        return res.status(200).send(costumer);
      }
      return res.status(404).send(`No client with id ${idOrName}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  if (idOrName && isNaN(Number(idOrName))) {
    try {
      const costumer = await findCostumerByName(idOrName);
      if (costumer) {
        return res.status(200).send(costumer);
      }
      return res.status(404).send(`No client with name ${idOrName}`);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  // No se proporcionó ningún parámetro, se obtienen todos los clientes
  try {
    const costumers = await getAllCostumers();
    if (costumers.length > 0) {
      return res.status(200).send(costumers);
    } else {
      return res.status(404).send("No costumers found");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};
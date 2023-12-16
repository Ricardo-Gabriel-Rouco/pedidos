import { Costumer } from "../entity/Costumer";
import { AppDataSource } from "../data-source";
import { toNewCostumer } from "../utils";

const costumerRepository = AppDataSource.getRepository(Costumer);

export const getAllCostumers = async () => {
  const result = await costumerRepository.find();
  return result;
};

export const findCostumerByName = async (name: string) => {
  const result = await costumerRepository
    .createQueryBuilder("costumer")
    .where("costumer.firstName LIKE :name", { name: `%${name}%` })
    .orWhere("costumer.secondName LIKE :name", { name: `%${name}%` })
    .orWhere("costumer.lastName LIKE :name", { name: `%${name}%` })
    .take(10).getMany();
    
  if (!result.length) throw new Error("Not found");
  return result;
};

export const findCostumerById = async (id: number) => {
  const result = await costumerRepository.find({
    where: {
      id: id,
    },
  });
  if (!result.length) throw new Error("Not found");
  return result;
};

export const createCostumer = async (user: any) => {
  const newUser = toNewCostumer(user);
  const result = await costumerRepository.save(newUser);
  return result;
};

export const updateCostumer = async (id: number, newData: any) => {
  const newUserData = toNewCostumer(newData);

  const user = await costumerRepository.find({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }

  if (Object.keys(newUserData).length === 0) {
    throw new Error("No valid properties found in newData");
  }
  await costumerRepository.update(id, newUserData);

  return newUserData;
};

export const deleteCostume = async (id: number) => {
  // const user = await AppDataSource.manager.findBy(User, { id: id });

  const user = await costumerRepository.find({
    where: {
      id: id,
    },
  });

  if (!user.length) {
    throw new Error(`User with ID ${id} not found`);
  }

  await costumerRepository.remove(user);

  return `Costumer with ${id} deleted succesfully`;
};

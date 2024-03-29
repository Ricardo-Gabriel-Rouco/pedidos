import { User } from "../user.model";
import { AppDataSource } from "../../../data-source";
import { toNewUser } from "../../../utils";

const userRepository = AppDataSource.getRepository(User);


export const findAllUsers = async () => {
  const result = await userRepository.find({
    where: {
      isDeleted: false
    }
  })
  return result;
};

export const findUsersByName = async (name: string) => {
  const result = await userRepository.find({
    where: {
      firstName: name,
      isDeleted: false
    },
  });
  if (!result.length) throw new Error("Not found");
  return result;
};



export const findUsersById = async (id: number) => {
  const result = await userRepository.find({
    where: {
      id: id,
      isDeleted: false
    },
  });
  if (!result.length) throw new Error("Not encontrado");
  return result;
};



export const updateUser = async (id: number, newData: any) => {
  const newUserData = toNewUser(newData);

  const user = await userRepository.find({
    where: {
      id: id
    },
  })

  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }

  if (Object.keys(newUserData).length === 0) {
    throw new Error("No valid properties found in newData");
  }
  const updatedUser = Object.assign(user, newUserData);
  await userRepository.update(id, newUserData)

  return updatedUser;
};

export const deleteUser = async (id: number) => {
  const user = await userRepository.find({
    where:{
      id: id
    }
  })

  if (!user.length) {
    throw new Error(`User with ID ${id} not found`);
  }

  await userRepository.update(id, {isDeleted: true});

  return `user with ${id} deleted succesfully`;
};

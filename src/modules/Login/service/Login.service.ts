import * as dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import { User } from "../../Users/user.model";
import { AppDataSource } from "../../../data-source";
import { comparePassword, hashPassword } from "../../../utils/hashPasswords";

const userRepository = AppDataSource.getRepository(User);



export const logUser = async (userData: any) => {
  const user = await userRepository.findOne({
    where: {
      firstName: userData.userName,
      isDeleted: false
    }
  })


  if(!user) throw new Error("Incorrect user or password")

  const isMatch = await comparePassword(userData.password, user.password)


  if(!isMatch) throw new Error("Incorrect user or password")


  // ! cambiar a archivo env para mayor seguridad
  try {
    const token = jwt.sign({ id: user.id }, "prueba");
    return {
      id: user.id,
      firstName: user.firstName,
      role: user.role,
      token
    };
  } catch (error) {
    console.error('Error creating token:', error);
    throw new Error('Failed to create token');
  }
}


export const createUser = async (user: any) => {
  const hashedPass = await hashPassword(user.password)
  const newUser = {
    firstName: user.firstName,
    password: hashedPass,
  }
  const userCreated = await userRepository.save(newUser)
  return userCreated;
};
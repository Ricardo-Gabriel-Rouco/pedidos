import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./modules/Users/user.model";
import { Costumer } from "./modules/Costumers/costumer.model";
import { Order } from "./modules/Orders/order.model";
import { OrderModification } from "./modules/Modifications/Modifications.model";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "darkgallow",
  password: "darkgallow12",
  database: "orders",
  synchronize: true,
  logging: false,
  entities: [User, Costumer, Order, OrderModification],
  migrations: [],
  subscribers: [],
});

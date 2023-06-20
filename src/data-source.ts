import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Costumer } from "./entity/Costumer"
import { Order } from "./entity/Order"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "darkgallow12",
    database: "orders",
    synchronize: true,
    logging: false,
    entities: [User, Costumer, Order],
    migrations: [],
    subscribers: [],
})

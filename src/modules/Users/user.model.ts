import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Order } from "../Orders/order.model";
import { roles } from "../../types";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  firstName: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: roles,
    default: roles.User
  })
  role: roles;

  @Column({
    default: false
  })
  isDeleted: boolean;


  @OneToMany(() => Order, order => order.user)
  orders: Order[];
}

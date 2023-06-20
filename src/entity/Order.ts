import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";
import { noticesType, stateOrder } from "../types";
import { Costumer } from "./Costumer";
import { User } from "./User";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({
    type: "int",
    nullable: true,
  })
  isbn: number;
  
  @Column({
    type: "varchar",
    nullable: false,
  })
  title: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  url: string;
  
  @Column({
    type: "varchar",
    nullable: false,
    enum: stateOrder
  })
  state: string;

  @Column({
    type: "varchar",
    nullable: false,
    enum: noticesType
  })
  notice: string;
  
  @Column({
    type: "varchar",
    nullable: true,
  })
  comment: string;
  
  @ManyToOne(()=> Costumer, costumer => costumer.order)
  costumer: Costumer
  
  @ManyToOne(()=> User, user => user.orders)
  user: Order
  
  @CreateDateColumn()
  createdAt: Date;
  
  @DeleteDateColumn()
  deletedAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
}

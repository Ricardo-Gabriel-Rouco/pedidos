import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  UpdateDateColumn,
  Column,
} from "typeorm";
import { User } from "../Users/user.model";
import { Order } from "../Orders/order.model";

@Entity()
export class OrderModification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Order)
  order: Order;

  @UpdateDateColumn()
  modificationDate: Date;

  @Column({
    type: "json",
    nullable: true,
  })
  modification: string;
}

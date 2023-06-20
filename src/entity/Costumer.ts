import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany
} from "typeorm";

import { Order } from "./Order";


@Entity()
export class Costumer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    nullable: false,
  })
  firstName: string;
  
  @Column({
    type: "varchar",
    nullable: true,
  })
  secondName: string;
  
  @Column({
    type: "varchar",
    nullable: false,
  })
  lastName: string;
  
  @Column({
    type: "varchar",
    nullable: true,
  })
  phone: string;
  
  @Column({
    type: "varchar",
    nullable: true,
  })
  email: string;
  
  @Column({
    type: "varchar",
    nullable: false,
  })
  socials: string;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @DeleteDateColumn()
  deletedAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Order, order => order.costumer)
  order: Order[]

}

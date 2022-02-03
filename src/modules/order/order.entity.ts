import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm';
import { CustomersEntity } from '../customer/customer.entity';

export enum orderStatus {
  PREPARING = 'PREPARING',
  REGISTRATION = 'REGISTRATION',
  PAYING = 'PAYING',
}

@Entity('orders')
export class OrdersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => CustomersEntity)
  @JoinColumn()

  @Column({
    type: 'numeric',
    nullable: false,
  })
  customerId!: number;

  @Column({
    type: 'enum',
    enum: 'orderStatus',
    nullable: false,
  })
  status!: orderStatus;

  @CreateDateColumn()
  @Column({
    type: 'timestamp',
    nullable: false,
  })
  createdAt!: string;

  @UpdateDateColumn()
  @Column({
    type: 'timestamp',
    nullable: false,
  })
  updatedAt!: string;
}

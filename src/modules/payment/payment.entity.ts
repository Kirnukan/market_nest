import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { OrdersEntity } from '../order/order.entity';


@Entity('payments')
export class PaymentsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => OrdersEntity)
  @JoinColumn()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  order_id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  kind!: string;
}

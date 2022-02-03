import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { OrdersEntity } from '../order/order.entity';
import { ProductsEntity } from '../product/product.entity';

@Entity('carts')
export class CartsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => OrdersEntity)
  @JoinColumn()

  @Column({
    type: 'numeric',
    nullable: false,
  })
  orderId!: number;

  @ManyToMany(() => ProductsEntity)
  @JoinTable({
    name: 'carts_to_products',
    joinColumn: {
      name: 'carts_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'products_id',
      referencedColumnName: 'id',
    },
  })

  @Column({
    type: 'numeric',
    nullable: false,
  })
  productId!: number;


  @Column({
    type: 'numeric',
    nullable: false,
    default: 0,
  })
  amount!: number | null;
}

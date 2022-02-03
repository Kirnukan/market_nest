import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { ProductsEntity } from '../product/product.entity';
import { PropertiesEntity } from '../property/property.entity';

@Entity('products_properties')
export class ProductsPropertiesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => ProductsEntity)
  @JoinColumn()

  @Column({
    type: 'numeric',
    nullable: false,
  })
  productId!: number;

  @OneToOne(() => PropertiesEntity)
  @JoinColumn()

  @Column({
    type: 'numeric',
    nullable: false,
  })
  propertyId!: number;


  @Column({
    type: 'numeric',
    nullable: false,
  })
  value!: number;
}

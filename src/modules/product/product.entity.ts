import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { BrandsEntity } from '../brand/brand.entity';
import { CategoriesEntity } from '../category/category.entity';
import { CurrenciesEntity } from '../currency/currency.entity';

@Entity('products')
export class ProductsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name!: string;


  @Column({
    type: 'numeric',
    nullable: false,
    default: 0,
  })
  availableAmount!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  caption!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description!: string;


  @Column({
    type: 'numeric',
    nullable: false,
  })
  price!: number;

  @ManyToOne(() => CategoriesEntity)
  @JoinTable()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  categoryId!: number;

  @ManyToOne(() => CurrenciesEntity)
  @JoinColumn()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  currencyId!: number;

  @ManyToOne(() => BrandsEntity)
  @JoinColumn()
  @Column({
    type: 'numeric',
    nullable: true,
  })
  brandId?: number;
}

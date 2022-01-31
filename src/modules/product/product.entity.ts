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
import { IsInt, Length } from 'class-validator';

@Entity('products')
export class ProductsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(1, 100)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  name!: string;

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
    default: 0,
  })
  availableAmount!: number | null;

  @Length(1, 128)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  caption!: string;

  @Length(1, 255)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  description!: string;

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  price!: number;

  @ManyToOne(() => CategoriesEntity)
  @JoinTable()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  categoryId!: number;

  @ManyToOne(() => CurrenciesEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  currencyId!: number;

  @ManyToOne(() => BrandsEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: true,
  })
  brandId?: number;
}

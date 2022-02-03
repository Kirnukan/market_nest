import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { Length } from 'class-validator';

@Entity('categories')
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(5, 132)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  caption!: string;


  @Column({
    type: 'numeric',
    nullable: false,
  })
  rank!: number;

  @ManyToOne(() => CategoriesEntity)

  @Column({
    type: 'numeric',
    nullable: true,
  })
  parentCategoryId!: number;
}

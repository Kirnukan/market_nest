import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';


@Entity('categories')
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

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

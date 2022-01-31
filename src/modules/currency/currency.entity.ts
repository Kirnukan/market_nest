import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Length } from 'class-validator';

@Entity('currencies')
export class CurrenciesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(1, 10)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  symbol!: string;
}

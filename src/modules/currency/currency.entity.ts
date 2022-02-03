import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('currencies')
export class CurrenciesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  symbol!: string;
}

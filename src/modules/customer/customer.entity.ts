import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class CustomersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: 'numeric',
    nullable: false,
    unique: true,
  })
  phone!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  firstName!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  lastName!: string;
}

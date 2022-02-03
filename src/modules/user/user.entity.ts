import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {  Length, IsEmail, IsPhoneNumber } from 'class-validator';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(4, 64)
  @IsEmail()
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email!: string;

  @IsPhoneNumber()

  @Column({
    type: 'numeric',
    nullable: false,
    unique: true,
  })
  phone!: number;

  @Length(1, 64)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  firstName!: string;

  @Length(1, 64)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  lastName!: string;
  @Length(1, 256)
  @Column({
    type: 'varchar',
  })
  password: string;
}

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export enum propType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  COLOR = 'COLOR',
}

@Entity('properties')
export class PropertiesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  caption!: string;

  @Column({
    type: 'enum',
    enum: 'propType',
    nullable: false,
  })
  type!: propType;
}

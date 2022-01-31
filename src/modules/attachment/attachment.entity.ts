import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Length } from 'class-validator';

@Entity('attachments')
export class AttachmentsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(5, 32)
  @Column({
    type: 'varchar',
    nullable: false,
  })
  name!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  filePath!: string;
}

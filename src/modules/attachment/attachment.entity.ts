import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('attachments')
export class AttachmentsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

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

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { AttachmentsEntity } from '../attachment/attachment.entity';
import { IsInt } from 'class-validator';

@Entity('products_images')
export class ProductsImagesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => AttachmentsEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  originalAttachmentId!: number;

  @ManyToOne(() => AttachmentsEntity)
  @JoinColumn()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  smallAttachmentId!: number;

  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  range!: number;
}

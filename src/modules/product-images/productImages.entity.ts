import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { AttachmentsEntity } from '../attachment/attachment.entity';

@Entity('products_images')
export class ProductsImagesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => AttachmentsEntity)
  @JoinColumn()

  @Column({
    type: 'numeric',
    nullable: false,
  })
  originalAttachmentId!: number;

  @ManyToOne(() => AttachmentsEntity)
  @JoinColumn()

  @Column({
    type: 'numeric',
    nullable: false,
  })
  smallAttachmentId!: number;


  @Column({
    type: 'numeric',
    nullable: false,
  })
  range!: number;
}

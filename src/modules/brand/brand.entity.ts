import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { AttachmentsEntity } from '../attachment/attachment.entity';


@Entity('brands')
export class BrandsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  caption!: string;

  @OneToOne(() => AttachmentsEntity)

  @JoinColumn()
  @Column({
    type: 'numeric',
    nullable: false,
  })
  logoAttachment_id!: number;
}

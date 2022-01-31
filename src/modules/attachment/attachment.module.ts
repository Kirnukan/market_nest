import { AttachmentsEntity } from './attachment.entity';
import { AttachmentService } from './attachment.service';
import { AttachmentsController } from './attachment.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AttachmentsEntity])],
  controllers: [AttachmentsController],
  providers: [AttachmentService],
})
export class AttachmentModule {}

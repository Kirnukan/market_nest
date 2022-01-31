import { AttachmentService } from './attachment.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AttachmentsEntity } from './attachment.entity';

@Controller('attachments')
export class AttachmentsController {
  @Inject()
  attachmentsService: AttachmentService;

  @Get(':id')
  async getAttachment(@Param() params): Promise<AttachmentsEntity> {
    if (+params.id) {
      return this.attachmentsService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getAttachments(): Promise<AttachmentsEntity[]> {
    return this.attachmentsService.findAll();
  }
}

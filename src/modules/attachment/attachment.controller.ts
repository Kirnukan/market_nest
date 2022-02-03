import { AttachmentService } from './attachment.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { AttachmentsEntity } from './attachment.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('attachments')
export class AttachmentsController {
  @Inject()
  attachmentsService: AttachmentService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
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

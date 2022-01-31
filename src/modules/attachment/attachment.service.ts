import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttachmentsEntity } from './attachment.entity';

@Injectable()
export class AttachmentService {
  constructor(
    @InjectRepository(AttachmentsEntity)
    private readonly attachmentsRepository: Repository<AttachmentsEntity>,
  ) {}

  async findAll() {
    return this.attachmentsRepository.find();
  }

  async findOne(id: number) {
    const result = await this.attachmentsRepository.findOne({ where: { id } });
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

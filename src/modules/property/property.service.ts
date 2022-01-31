import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropertiesEntity } from './property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(PropertiesEntity)
    private readonly propertyRepository: Repository<PropertiesEntity>,
  ) {}

  async findAll() {
    const result = await this.propertyRepository.find();
    return result;
  }

  async findOne(id: number) {
    const result = await this.propertyRepository.findOne(id);
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

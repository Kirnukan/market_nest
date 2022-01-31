import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrandsEntity } from './brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(BrandsEntity)
    private readonly brandRepository: Repository<BrandsEntity>,
  ) {}

  async findAll() {
    const result = await this.brandRepository.find();
    return result;
  }

  async findOne(id: number) {
    const result = await this.brandRepository.findOne({ where: { id } });
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

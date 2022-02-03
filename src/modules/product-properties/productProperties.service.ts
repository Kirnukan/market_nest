import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsPropertiesEntity } from './productProperties.entity';

@Injectable()
export class ProductPropertiesService {
  constructor(
    @InjectRepository(ProductsPropertiesEntity)
    private readonly productsPropertiesRepository: Repository<ProductsPropertiesEntity>,
  ) {}

  async findAll() {
     return await this.productsPropertiesRepository.find();
  }

  async findOne(id: number) {
    const result = await this.productsPropertiesRepository.findOne({
      where: { id: id },
    });
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

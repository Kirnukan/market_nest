import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>,
  ) {}

  async findAll() {
     return await this.productRepository.find();
  }

  async findOne(id: number) {
    const result = await this.productRepository.findOne(id);
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

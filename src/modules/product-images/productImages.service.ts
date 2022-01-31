import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsImagesEntity } from './productImages.entity';

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductsImagesEntity)
    private readonly productImageRepository: Repository<ProductsImagesEntity>,
  ) {}

  async findAll() {
    const result = await this.productImageRepository.find();
    return result;
  }

  async findOne(id: number) {
    const result = await this.productImageRepository.findOne({
      where: { id: id },
    });
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

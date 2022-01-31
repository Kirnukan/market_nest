import { ProductService } from './product.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductsEntity } from './product.entity';

@Controller('products')
export class ProductsController {
  @Inject()
  productsService: ProductService;

  @Get(':id')
  async getProduct(@Param() params): Promise<ProductsEntity> {
    if (+params.id) {
      return this.productsService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getProducts(): Promise<ProductsEntity[]> {
    return this.productsService.findAll();
  }
}

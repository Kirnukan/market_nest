import { ProductService } from './product.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { ProductsEntity } from './product.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('products')
export class ProductsController {
  @Inject()
  productsService: ProductService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
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

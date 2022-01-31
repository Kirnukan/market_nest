import { ProductPropertiesService } from './productProperties.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductsPropertiesEntity } from './productProperties.entity';

@Controller('products_properties')
export class ProductPropertiesController {
  @Inject()
  productPropertiesService: ProductPropertiesService;

  @Get(':id')
  async getProperty(@Param() params): Promise<ProductsPropertiesEntity> {
    if (+params.id) {
      return this.productPropertiesService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getProperties(): Promise<ProductsPropertiesEntity[]> {
    return this.productPropertiesService.findAll();
  }
}

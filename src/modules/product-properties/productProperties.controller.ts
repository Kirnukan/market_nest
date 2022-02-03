import { ProductPropertiesService } from './productProperties.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { ProductsPropertiesEntity } from './productProperties.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('products_properties')
export class ProductPropertiesController {
  @Inject()
  productPropertiesService: ProductPropertiesService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
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

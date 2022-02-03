import { ProductImagesService } from './productImages.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { ProductsImagesEntity } from './productImages.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('products_images')
export class ProductImagesController {
  @Inject()
  productImagesService: ProductImagesService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
  async getProductImage(@Param() params): Promise<ProductsImagesEntity> {
    if (+params.id) {
      return this.productImagesService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getProductImages(): Promise<ProductsImagesEntity[]> {
    return this.productImagesService.findAll();
  }
}

import { BrandService } from './brand.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BrandsEntity } from './brand.entity';

@Controller('brands')
export class BrandsController {
  @Inject()
  brandsService: BrandService;

  @Get(':id')
  async getBrand(@Param() params): Promise<BrandsEntity> {
    if (+params.id) {
      return this.brandsService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }

  @Get()
  async getBrands(): Promise<BrandsEntity[]> {
    return this.brandsService.findAll();
  }
}

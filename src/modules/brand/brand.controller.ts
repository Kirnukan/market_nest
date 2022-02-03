import { BrandService } from './brand.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { BrandsEntity } from './brand.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('brands')
export class BrandsController {
  @Inject()
  brandsService: BrandService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
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

import { CategoryService } from './category.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { CategoriesEntity } from './category.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('categories')
export class CategoriesController {
  @Inject()
  categoriesService: CategoryService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
  async getCategory(@Param() params): Promise<CategoriesEntity> {
    if (+params.id) {
      return this.categoriesService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getCategories(): Promise<CategoriesEntity[]> {
    return this.categoriesService.findAll();
  }
}

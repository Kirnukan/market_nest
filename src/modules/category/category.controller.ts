import { CategoryService } from './category.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CategoriesEntity } from './category.entity';

@Controller('categories')
export class CategoriesController {
  @Inject()
  categoriesService: CategoryService;

  @Get(':id')
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

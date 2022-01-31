import { CategoriesEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CategoriesController } from './category.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesEntity])],
  controllers: [CategoriesController],
  providers: [CategoryService],
})
export class CategoryModule {}

import { ProductsImagesEntity } from './productImages.entity';
import { ProductImagesService } from './productImages.service';
import { ProductImagesController } from './productImages.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsImagesEntity])],
  controllers: [ProductImagesController],
  providers: [ProductImagesService],
})
export class ProductImagesModule {}

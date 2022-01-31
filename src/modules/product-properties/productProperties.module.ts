import { ProductsPropertiesEntity } from './productProperties.entity';
import { ProductPropertiesService } from './productProperties.service';
import { ProductPropertiesController } from './productProperties.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsPropertiesEntity])],
  controllers: [ProductPropertiesController],
  providers: [ProductPropertiesService],
})
export class ProductPropertiesModule {}

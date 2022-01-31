import { BrandsEntity } from './brand.entity';
import { BrandService } from './brand.service';
import { BrandsController } from './brand.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BrandsEntity])],
  controllers: [BrandsController],
  providers: [BrandService],
})
export class BrandModule {}

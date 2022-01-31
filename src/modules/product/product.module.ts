import { ProductsEntity } from './product.entity';
import { ProductService } from './product.service';
import { ProductsController } from './product.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}

import { CartsEntity } from './cart.entity';
import { CartService } from './cart.service';
import { CartsController } from './cart.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CartsEntity])],
  controllers: [CartsController],
  providers: [CartService],
})
export class CartModule {}

import { OrdersEntity } from './order.entity';
import { OrderService } from './order.service';
import { OrdersController } from './order.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersEntity])],
  controllers: [OrdersController],
  providers: [OrderService],
})
export class OrderModule {}

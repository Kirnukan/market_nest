import { OrderService } from './order.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { OrdersEntity } from './order.entity';

@Controller('orders')
export class OrdersController {
  @Inject()
  ordersService: OrderService;

  @Get(':id')
  async getOrder(@Param() params): Promise<OrdersEntity> {
    if (+params.id) {
      return this.ordersService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getOrders(): Promise<OrdersEntity[]> {
    return this.ordersService.findAll();
  }
}

import { OrderService } from './order.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { OrdersEntity } from './order.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('orders')
export class OrdersController {
  @Inject()
  ordersService: OrderService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
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

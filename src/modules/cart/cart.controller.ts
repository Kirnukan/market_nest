import { CartService } from './cart.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CartsEntity } from './cart.entity';

@Controller('carts')
export class CartsController {
  @Inject()
  cartsService: CartService;

  @Get(':id')
  async getCart(@Param() params): Promise<CartsEntity> {
    if (+params.id) {
      return this.cartsService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getCarts(): Promise<CartsEntity[]> {
    return this.cartsService.findAll();
  }
}

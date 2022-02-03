import { CartService } from './cart.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { CartsEntity } from './cart.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('carts')
export class CartsController {
  @Inject()
  cartsService: CartService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
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

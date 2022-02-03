import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartsEntity } from './cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartsEntity)
    private readonly cartRepository: Repository<CartsEntity>,
  ) {}

  async findAll() {
     return await this.cartRepository.find();
  }

  async findOne(id: number) {
    const result = await this.cartRepository.findOne(id);
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

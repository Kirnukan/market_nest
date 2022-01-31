import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrdersEntity } from './order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly orderRepository: Repository<OrdersEntity>,
  ) {}

  async findAll() {
    const result = await this.orderRepository.find();
    return result;
  }

  async findOne(id: number) {
    const result = await this.orderRepository.findOne(id);
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

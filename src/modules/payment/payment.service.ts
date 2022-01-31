import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentsEntity } from './payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentsEntity)
    private readonly paymentRepository: Repository<PaymentsEntity>,
  ) {}

  async findAll() {
    const result = await this.paymentRepository.find();
    return result;
  }

  async findOne(id: number) {
    const result = await this.paymentRepository.findOne(id);
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

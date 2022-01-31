import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersEntity } from '../customer/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomersEntity)
    private readonly customerRepository: Repository<CustomersEntity>,
  ) {}

  async findAll() {
    const result = await this.customerRepository.find();
    return result;
  }

  async findOne(id: number) {
    const result = await this.customerRepository.findOne(id);
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

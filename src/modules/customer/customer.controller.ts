import { CustomerService } from './customer.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CustomersEntity } from '../customer/customer.entity';

@Controller('customers')
export class CustomersController {
  @Inject()
  customersService: CustomerService;

  @Get(':id')
  async getCustomer(@Param() params): Promise<CustomersEntity> {
    if (+params.id) {
      return this.customersService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getCustomers(): Promise<CustomersEntity[]> {
    return this.customersService.findAll();
  }
}

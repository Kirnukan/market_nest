import { CustomerService } from './customer.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { CustomersEntity } from '../customer/customer.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('customers')
export class CustomersController {
  @Inject()
  customersService: CustomerService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
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

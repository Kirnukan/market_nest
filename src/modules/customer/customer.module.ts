import { CustomersEntity } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomersController } from './customer.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CustomersEntity])],
  controllers: [CustomersController],
  providers: [CustomerService],
})
export class CustomerModule {}

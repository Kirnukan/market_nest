import { PaymentService } from './payment.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PaymentsEntity } from './payment.entity';

@Controller('payments')
export class PaymentsController {
  @Inject()
  paymentsService: PaymentService;

  @Get(':id')
  async getPayment(@Param() params): Promise<PaymentsEntity> {
    if (+params.id) {
      return this.paymentsService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getPayments(): Promise<PaymentsEntity[]> {
    return this.paymentsService.findAll();
  }
}

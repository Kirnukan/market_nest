import { PaymentsEntity } from './payment.entity';
import { PaymentService } from './payment.service';
import { PaymentsController } from './payment.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentsEntity])],
  controllers: [PaymentsController],
  providers: [PaymentService],
})
export class PaymentModule {}

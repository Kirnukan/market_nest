import { CurrenciesEntity } from './currency.entity';
import { CurrencyService } from './currency.service';
import { CurrenciesController } from './currency.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CurrenciesEntity])],
  controllers: [CurrenciesController],
  providers: [CurrencyService],
})
export class CurrencyModule {}

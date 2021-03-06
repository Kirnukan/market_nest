import { CurrencyService } from './currency.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { CurrenciesEntity } from './currency.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('currencies')
export class CurrenciesController {
  @Inject()
  currenciesService: CurrencyService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
  async getCurrency(@Param() params): Promise<CurrenciesEntity> {
    if (+params.id) {
      return this.currenciesService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getCurrencies(): Promise<CurrenciesEntity[]> {
    return this.currenciesService.findAll();
  }
}

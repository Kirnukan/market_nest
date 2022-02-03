import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrenciesEntity } from './currency.entity';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(CurrenciesEntity)
    private readonly currencyRepository: Repository<CurrenciesEntity>,
  ) {}

  async findAll() {
    return await this.currencyRepository.find();
  }

  async findOne(id: number) {
    const result = await this.currencyRepository.findOne(id);
    if (result) {
      return result;
    }
    throw new HttpException('Have not result', HttpStatus.NOT_FOUND);
  }
}

import { PropertyService } from './property.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PropertiesEntity } from './property.entity';

@Controller('properties')
export class PropertiesController {
  @Inject()
  propertiesService: PropertyService;

  @Get(':id')
  async getProperty(@Param() params): Promise<PropertiesEntity> {
    if (+params.id) {
      return this.propertiesService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getProperties(): Promise<PropertiesEntity[]> {
    return this.propertiesService.findAll();
  }
}

import { PropertyService } from './property.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { PropertiesEntity } from './property.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('properties')
export class PropertiesController {
  @Inject()
  propertiesService: PropertyService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
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

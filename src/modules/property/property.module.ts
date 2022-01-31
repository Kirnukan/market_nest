import { PropertiesEntity } from './property.entity';
import { PropertyService } from './property.service';
import { PropertiesController } from './property.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PropertiesEntity])],
  controllers: [PropertiesController],
  providers: [PropertyService],
})
export class PropertyModule {}

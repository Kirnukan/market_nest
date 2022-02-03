import { UserService } from './user.service';
import {
  Controller,
  Get,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { UsersEntity } from './user.entity';
import { ParamsIdGuard } from 'src/guards/paramsId.guard';

@Controller('users')
export class UsersController {
  @Inject()
  usersService: UserService;

  @Get(':id')
  @UseGuards(ParamsIdGuard)
  async getUser(@Param() params): Promise<UsersEntity> {
    if (+params.id) {
      return this.usersService.findOne(+params.id);
    }
    throw new HttpException('Have not id', HttpStatus.BAD_REQUEST);
  }
  @Get()
  async getUsers(): Promise<UsersEntity[]> {
    return this.usersService.findAll();
  }
}

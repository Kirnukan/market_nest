import { HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
import { UsersEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import jwt from 'jsonwebtoken';
import { UserTokenInterface } from './interfaces/userToken.interface';
import { AuthorizationDto } from './dto/authorization.dto';

@Injectable()
export class AuthenticationService {
  @Inject()
  configService: ConfigService;

  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  newToken(payload: UserTokenInterface) {
    const jwtToken = jwt.sign(payload, this.configService.get('SECRET_KEY'));
    return jwtToken;
  }

  verifyToken(token: unknown): UserTokenInterface {
    try {
      return <UserTokenInterface>(
        jwt.verify(String(token), this.configService.get('SECRET_KEY'))
      );
    } catch (error) {
      throw new HttpException(
        'Code 403, token is invalid',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async authenticator(dto: AuthorizationDto) {
    const userExistence = await this.usersRepository.findOne({
      where: { email: dto.email },
    });

    if (!userExistence) {
      throw new HttpException("Wrong user's data", HttpStatus.UNAUTHORIZED);
    } else {
      const verifyPassword = bcrypt.compare(dto.password, userExistence.password);

      if (!verifyPassword) {
        throw new HttpException("Wrong user's data", HttpStatus.UNAUTHORIZED);
      } else {
        return {
          user: userExistence,
          authenticatedToken: this.newToken(userExistence),
        };
      }
    }
  }
}

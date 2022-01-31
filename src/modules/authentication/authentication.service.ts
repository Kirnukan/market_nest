import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import jwt from 'jsonwebtoken';
import { UserTokenInterface } from './interfaces/userToken.interface';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    private readonly configService: ConfigService
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

  async authenticator(email: string, password: string) {
    const userExistence = await this.usersRepository.findOne({
      where: { email },
    });

    if (!userExistence) {
      throw new HttpException("Wrong user's data", HttpStatus.UNAUTHORIZED);
    } else {
      const verifyPassword = bcrypt.compare(password, userExistence.password);

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

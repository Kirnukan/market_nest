import { AuthenticationService } from './authentication.service';
import {
  Controller,
  Get,
  Inject,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RequestInterface } from './interfaces/request.interface';
import { Response } from 'express';

@Controller('authentication')
export class AuthenticationController {
  @Inject()
  authenticationService: AuthenticationService;

  @Post()
  async authorization(req: RequestInterface, res: Response) {
    if (req.cookies.token) {
      const verifiedToken = this.authenticationService.verifyToken(
        req.cookies.token,
      );
      if (verifiedToken) {
        throw 'Already logged in';
      }
    }

    const decodedUserData = await this.authenticationService.authenticator(
      req.body.email,
      req.body.password,
    );
    if (res) {
      res.cookie('value', decodedUserData.authenticatedToken);
      res.send('Succes log in');
      res.status(200);
    } else {
      throw new HttpException('Have not response', HttpStatus.BAD_REQUEST);
    }
  }
}

import { AuthenticationService } from './authentication.service';
import {
  Controller,
  Inject,
  HttpException,
  HttpStatus,
  Post,
  Body,
  Req,
  Res
} from '@nestjs/common';
import { AuthorizationDto } from './dto/authorization.dto';

@Controller('authentication')
export class AuthenticationController {
  @Inject()
  authenticationService: AuthenticationService;

  @Post()
  async authorization(@Body() authorizationDto: AuthorizationDto,
                      @Req() req,
                      @Res() res) {
    if (req.cookies.token) {
      const verifiedToken = this.authenticationService.verifyToken(
        req.cookies.token,
      );
      if (verifiedToken) {
        throw 'Already logged in';
      }
    }

    const decodedUserData = await this.authenticationService.authenticator(authorizationDto);
    if (res) {
      res.cookie('value', decodedUserData.authenticatedToken);
      res.send('Succes log in');
      res.status(200);
    } else {
      throw new HttpException('Have not response', HttpStatus.BAD_REQUEST);
    }
  }
}

import { IsEmail, Length } from 'class-validator';

export class AuthorizationDto {
  @IsEmail()
  email: string;

  @Length(8, 64)
  password: string;
}

import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;
}

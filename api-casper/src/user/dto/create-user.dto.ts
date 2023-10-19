import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { CreatePerfilacademicoDto } from '../../perfilacademico/dto/create-perfilacademico.dto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  perfilAcademico: CreatePerfilacademicoDto;
}

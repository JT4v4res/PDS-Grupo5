import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfessorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  lattes: string;
}

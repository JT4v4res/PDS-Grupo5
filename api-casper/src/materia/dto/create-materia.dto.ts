import { IsEmpty, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateMateriaDto {
  @IsNotEmpty()
  @IsString()
  codigo: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['Obrigatória', 'Eletiva'])
  tipo: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;
}

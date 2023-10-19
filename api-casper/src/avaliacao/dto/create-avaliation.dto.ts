import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateAvaliationDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsString()
  semestre: string;

  @IsNotEmpty()
  @IsNumber()
  nota_avaliacao: number;

  @IsNotEmpty()
  @IsNumber()
  nota_materia: number;

  @IsNotEmpty()
  @IsBoolean()
  passou_sem_final: boolean;

  @IsNotEmpty()
  @IsNumber()
  didatica: number;

  @IsNotEmpty()
  @IsNumber()
  dedicacao: number;

  @IsNotEmpty()
  @IsNumber()
  presenca: number;

  @IsNotEmpty()
  @IsNumber()
  metodologia: number;

  @IsNotEmpty()
  @IsNumber()
  periodo: number;

  @IsNotEmpty()
  @IsBoolean()
  recomenda_no_inicio: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isTeacher?: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isMateria?: boolean;

  @IsNotEmpty()
  @IsInt()
  relationshipId: number;

  @IsNotEmpty()
  @IsBoolean()
  primeira_aprovacao: boolean;
}

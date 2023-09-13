import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAvaliationDto {
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
}

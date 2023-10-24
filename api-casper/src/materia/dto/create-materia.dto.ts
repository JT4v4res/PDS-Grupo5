import {IsEmpty, IsIn, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import {ProfessorEntity} from "../../professor/entity/professor.entity";

export class CreateMateriaDto {
  @IsNotEmpty({ message: 'codigo is mandatory' })
  @IsString()
  codigo: string;

  @IsNotEmpty({ message: 'tipo is mandatory' })
  @IsString()
  @IsIn(['Obrigatória', 'Eletiva'])
  tipo: string;

  @IsNotEmpty({ message: 'nivelEsforco is mandatory' })
  @IsString()
  nivelEsforco: string;

  @IsNotEmpty({ message: 'nome is mandatory' })
  @IsString()
  nome: string;

  @IsNotEmpty({ message: 'descricao is mandatory' })
  @IsString()
  descricao: string;

  @IsString()
  @IsNotEmpty({ message: 'label is mandatory' })
  label: string;

  @IsString({ message: 'curso is mandatory' })
  @IsNotEmpty()
  curso: string;

  @IsNumber()
  @IsNotEmpty({ message: 'periodo is mandatory' })
  periodo: number;

  @IsString()
  @IsNotEmpty({ message: 'professor is mandatory' })
  professor: string;

  @IsString()
  @IsNotEmpty()
  matExpositivo: string;

  @IsString()
  @IsNotEmpty()
  questions: string;

  @IsString()
  @IsNotEmpty()
  literatura: string;

  @IsString()
  @IsNotEmpty()
  areaRelevante: string;
}

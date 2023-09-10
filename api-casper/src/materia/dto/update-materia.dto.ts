import { CreateMateriaDto } from './create-materia.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateMateriaDto extends CreateMateriaDto {
  @IsNumber()
  @IsNotEmpty()
  materiaId: number;
}

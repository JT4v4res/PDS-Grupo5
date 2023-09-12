import { CreateProfessorDto } from './create-professor.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateProfessorDto extends CreateProfessorDto {
  @IsNotEmpty()
  @IsInt()
  id: number;
}

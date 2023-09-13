import { CreateAvaliationDto } from './create-avaliation.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateAvaliationDto extends CreateAvaliationDto {
  @IsNotEmpty()
  @IsNumber()
  avaliacaoId: number;
}

import { CreateAreaDto } from './create-area.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateAreaDto extends CreateAreaDto {
  @IsNotEmpty()
  @IsNumber()
  areaId: number;
}

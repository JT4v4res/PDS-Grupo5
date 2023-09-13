import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAreaDto {
  @IsNotEmpty()
  @IsString()
  area: string;
}

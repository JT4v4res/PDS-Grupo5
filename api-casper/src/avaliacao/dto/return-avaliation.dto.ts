import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class ReturnAvaliationDto {
  @IsNotEmpty()
  @IsNumber()
  firstApproval: number;

  @IsNotEmpty()
  @IsNumber()
  didatics: number;

  @IsNotEmpty()
  @IsNumber()
  concluded: number;

  @IsNotEmpty()
  @IsNumber()
  inStart: number;

  @IsNotEmpty()
  @IsNumber()
  dedication: number;

  @IsNotEmpty()
  @IsNumber()
  totalValuations: number;

  @IsNotEmpty()
  @IsDate()
  lastValuation: Date;
}

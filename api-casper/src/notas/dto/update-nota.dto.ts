import { PartialType } from '@nestjs/swagger';
import { CreateNotaDto } from './create-nota.dto';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateNotaDto extends PartialType(CreateNotaDto) {
    @IsNotEmpty()
    @IsString()
    notaId: number;
}

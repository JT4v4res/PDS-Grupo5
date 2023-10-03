import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilacademicoDto } from './create-perfilacademico.dto';
import { IsNotEmpty, IsString } from 'class-validator';
export class UpdatePerfilacademicoDto extends PartialType(CreatePerfilacademicoDto) {

    @IsNotEmpty()
    @IsString()
    matricula: string;
}

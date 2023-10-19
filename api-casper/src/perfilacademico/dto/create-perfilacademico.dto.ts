import { IsNumber, IsString } from 'class-validator';

export class CreatePerfilacademicoDto {

    @IsString()
    matricula: string;

    @IsNumber()
    id: number;

    @IsString()
    curso: string;
    
    @IsString()
    universidade: string;
    
}

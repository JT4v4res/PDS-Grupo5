import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePerfilacademicoDto {

    @IsNotEmpty()
    @IsString()
    matricula: string;
    
    @IsNotEmpty()
    @IsString()
    curso: string;
    
    @IsNotEmpty()
    @IsString()
    universidade: string;
}

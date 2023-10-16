import { IsNotEmpty, IsString } from "class-validator";

export class CreateNotaDto {
    @IsNotEmpty()
    @IsString()
    matricula: string;

    @IsNotEmpty()
    @IsString()
    materia: string;
}

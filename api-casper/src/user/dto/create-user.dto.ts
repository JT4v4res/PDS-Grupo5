import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;

}

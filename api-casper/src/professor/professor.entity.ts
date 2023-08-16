import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    nome:string;

    @Column({length: 255}) 
    lattes:string;

    @Column() 
    esta_ativo:boolean;
}
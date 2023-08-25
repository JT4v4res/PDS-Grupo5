import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Materia {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    codigo:string;
    
    @Column({ length: 25 })
    tipo:string;

    @Column({ length: 255 })
    nome:string;

    @Column('int') 
    carga_horaria:number;

    @Column('bool') 
    esta_ativo:boolean;

    @Column('bool') 
    prerequisito: boolean;
}
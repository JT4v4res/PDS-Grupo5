import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cronograma {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_materia: number;
    
    @Column()
    id_professor: number;

    @Column()
    horario: string;

    @Column() 
    periodo: string;
}
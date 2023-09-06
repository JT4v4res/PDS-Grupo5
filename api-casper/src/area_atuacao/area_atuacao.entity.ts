import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Materia } from 'src/materia/materia.entity';

@Entity()
export class AreasAtuacao {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    area: string;
    
    @ManyToMany(() => Materia, (materia) => materia.areasAtuacao)
    materias: Materia[];
}
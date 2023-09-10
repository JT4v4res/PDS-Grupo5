import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { MateriaEntity } from '../materia/entity/materia.entity'
import { Avaliacao } from '../avaliacao/avaliacao.entity'

@Entity()
export class Professor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    nome:string;

    @Column()
    descricao:string;

    @Column({length: 255}) 
    lattes:string;

    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.professor)
    avaliacoes: Avaliacao[];

    @ManyToMany(() => MateriaEntity, (materia) => materia.professores)
    materias: MateriaEntity[];
}
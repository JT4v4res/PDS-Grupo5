import {
    Entity,
    Column,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
  } from 'typeorm';

import { MateriaEntity } from '../../materia/entity/materia.entity';
import { NotaEntity } from '../../notas/entities/nota.entity';

@Entity()
export class PerfilacademicoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn({ nullable: false })
    matricula: string;

    @Column({length: 255})
    curso: string;

    @Column({length: 255})
    universidade: string;

    @Column({length: 6})
    semestre: string;

    @Column({default: 1})
    periodo: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(
        () => MateriaEntity,
        (materia: MateriaEntity) => materia.codigo)
    materias_cursadas: MateriaEntity[];

    @OneToMany(
        () => MateriaEntity,
        (materia: MateriaEntity) => materia.codigo)
    materias_restantes: MateriaEntity[];

    @Column()
    pontuacao: number;

    @OneToMany(
        () => MateriaEntity,
        (materia: MateriaEntity) => materia.codigo)
    disciplinas_matriculado: MateriaEntity[];

    @OneToMany(
        () => NotaEntity,
        (nota: NotaEntity) => nota.matricula)
    notas: NotaEntity[];

    @Column()
    progresso: number;

    constructor(perfil?:Partial<PerfilacademicoEntity>){
        this.matricula = perfil?.matricula;
        this.id = perfil?.id;
        this.curso = perfil?.curso;
        this.universidade = perfil?.universidade;
        this.semestre = perfil?.semestre;
        this.periodo = perfil?.periodo;
        this.createdAt = perfil?.createdAt;
        this.updatedAt = perfil?.updatedAt;
        this.deletedAt = perfil?.deletedAt;
        this.materias_cursadas = perfil?.materias_cursadas;
        this.materias_restantes = perfil?.materias_restantes;
        this.pontuacao = perfil?.pontuacao;
        this.disciplinas_matriculado = perfil?.disciplinas_matriculado;
        this.notas = perfil?.notas;
        this.progresso = perfil?.progresso;
    }
}

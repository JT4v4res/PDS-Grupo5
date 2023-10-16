import {
    Entity,
    Column,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    OneToMany
  } from 'typeorm';

import { MateriaEntity } from 'src/materia/entity/materia.entity';
import { NotaEntity } from 'src/notas/entities/nota.entity';

@Entity()
export class PerfilacademicoEntity {

    @PrimaryColumn({ nullable: false })
    matricula: string;

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    curso: string;

    @Column({length: 255})
    universidade: string;

    @Column({length: 6})
    semestre: string;

    @Column()
    periodo: number;

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
        this.materias_cursadas = perfil?.materias_cursadas;
        this.materias_restantes = perfil?.materias_restantes;
        this.pontuacao = perfil?.pontuacao;
        this.disciplinas_matriculado = perfil?.disciplinas_matriculado;
        this.notas = perfil?.notas;
        this.progresso = perfil?.progresso;
    }
}

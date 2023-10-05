import {
    Entity,
    Column,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    OneToMany
  } from 'typeorm';

import { MateriaEntity } from 'src/materia/entity/materia.entity';

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

    // @Column()
    // notas: string[];

    @Column()
    progresso: number;
}

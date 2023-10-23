import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { MateriaEntity } from 'src/materia/entity/materia.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { PeriodDataEntity } from './periodData.entity';

@Entity()
export class PerfilacademicoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  matricula: string;

  @Column({ length: 255 })
  curso: string;

  @Column({ length: 255 })
  universidade: string;

  @Column({ nullable: true })
  semestre: string;

  @Column({ nullable: true })
  periodo: number;

  @ManyToMany(
    () => MateriaEntity,
    (materia: MateriaEntity) => materia.perfilCursadas,
    {
      nullable: true,
    },
  )
  @JoinTable()
  materias_cursadas: MateriaEntity[];

  @ManyToMany(
    () => MateriaEntity,
    (materia: MateriaEntity) => materia.perfilRestantes,
    {
      nullable: true,
    },
  )
  @JoinTable()
  materias_restantes: MateriaEntity[];

  @Column({ nullable: true })
  pontuacao: number;

  @ManyToMany(
    () => MateriaEntity,
    (materia: MateriaEntity) => materia.perfilMatriculadas,
    { nullable: true },
  )
  @JoinTable()
  disciplinas_matriculado: MateriaEntity[];

  @Column({ nullable: true })
  progresso: number;

  @OneToOne(() => UserEntity, (user) => user.perfil, { nullable: true })
  @JoinColumn()
  user: UserEntity;

  @OneToMany(() => PeriodDataEntity, (periodData) => periodData.perfilac, {
    nullable: true,
  })
  @JoinColumn()
  periodData: PeriodDataEntity[];
}

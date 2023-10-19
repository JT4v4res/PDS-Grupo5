import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { MateriaEntity } from 'src/materia/entity/materia.entity';
import { UserEntity } from '../../user/entities/user.entity';

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

  @Column({ length: 7, nullable: true })
  semestre: string;

  @Column({ nullable: true })
  periodo: number;

  // @OneToMany(() => MateriaEntity, (materia: MateriaEntity) => materia.codigo, {
  //   nullable: true,
  // })
  // materias_cursadas: MateriaEntity[];

  // @OneToMany(() => MateriaEntity, (materia: MateriaEntity) => materia.codigo, {
  //   nullable: true,
  // })
  // materias_restantes: MateriaEntity[];

  @Column({ nullable: true })
  pontuacao: number;

  // @OneToMany(() => MateriaEntity, (materia: MateriaEntity) => materia.codigo)
  // disciplinas_matriculado: MateriaEntity[];

  @Column({ nullable: true })
  progresso: number;

  @OneToOne(() => UserEntity, (user) => user.perfil, { nullable: true })
  @JoinColumn()
  user: UserEntity;
}

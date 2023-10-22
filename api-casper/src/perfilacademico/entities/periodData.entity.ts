import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PerfilacademicoEntity } from './perfilacademico.entity';
import {MateriaPeriodoEntity} from "./materiaperiodo.entity";

@Entity()
export class PeriodDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  periodo: string;

  @OneToMany(
    () => MateriaPeriodoEntity,
    (materiaPeriodo) => materiaPeriodo.periodProfile,
    { nullable: true },
  )
  materiasPeriodo: MateriaPeriodoEntity[];

  @Column({ nullable: true })
  qntDisciplinas: number;

  @Column({ nullable: true })
  coeficiente: string;

  @ManyToOne(() => PerfilacademicoEntity, (perfil) => perfil.periodData, {
    nullable: true,
  })
  perfilac: PerfilacademicoEntity;
}

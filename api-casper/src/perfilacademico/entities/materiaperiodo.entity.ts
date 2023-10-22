import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PeriodDataEntity } from './periodData.entity';

@Entity()
export class MateriaPeriodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  CH: string;

  @Column({ nullable: true })
  Conceito: string;

  @Column({ nullable: true })
  Código: string;

  @Column({ nullable: true })
  Média: string;

  @Column({ nullable: true })
  Nome: string;

  @ManyToOne(() => PeriodDataEntity, (period) => period.materiasPeriodo, {
    nullable: true,
  })
  periodProfile: PeriodDataEntity;
}

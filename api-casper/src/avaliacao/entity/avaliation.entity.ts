import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { MateriaEntity } from '../../materia/entity/materia.entity';
import { ProfessorEntity } from '../../professor/entity/professor.entity';

@Entity()
export class AvaliationEntity {
  @PrimaryGeneratedColumn()
  avaliationId: number;

  @ManyToOne(
    () => MateriaEntity,
    (materia: MateriaEntity) => materia.avaliacoes,
  )
  materia: MateriaEntity;

  @ManyToOne(
    () => ProfessorEntity,
    (professor: ProfessorEntity) => professor.avaliacoes,
  )
  professor: ProfessorEntity;

  @Column()
  semestre: string;

  @Column()
  nota_avaliacao: number;

  @Column('float')
  nota_materia: number;

  @Column()
  passou_sem_final: boolean;

  @Column()
  didatica: number;

  @Column()
  dedicacao: number;

  @Column()
  presenca: number;

  @Column()
  metodologia: number;

  @Column()
  periodo: number;

  @Column()
  recomenda_no_inicio: boolean;

  // constructor(avaliation?: Partial<AvaliationEntity>) {
  //   this.avaliationId = avaliation.avaliationId;
  //   this.passou_sem_final = avaliation.passou_sem_final;
  //   this.dedicacao = avaliation.dedicacao;
  //   this.metodologia = avaliation.metodologia;
  //   this.periodo = avaliation.periodo;
  //   this.didatica = avaliation.didatica;
  //   this.materia = avaliation.materia;
  //   this.nota_avaliacao = avaliation.nota_avaliacao;
  //   this.nota_materia = avaliation.nota_materia;
  //   this.presenca = avaliation.presenca;
  //   this.professor = avaliation.professor;
  //   this.recomenda_no_inicio = avaliation.recomenda_no_inicio;
  //   this.semestre = avaliation.semestre;
  // }
}

import {
  BaseEntity,
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ProfessorEntity } from '../../professor/entity/professor.entity';
import { RelevantAreaEntity } from '../../relevant_area/entity/relevant_area.entity';
import { AvaliationEntity } from '../../avaliacao/entity/avaliation.entity';

@Entity()
export class MateriaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  materiaId: number;

  @PrimaryColumn({ length: 25, nullable: false })
  codigo: string;

  @Column({ enum: ['Obrigatória', 'Eletiva'], nullable: false })
  tipo: string;

  @Column({ nullable: false })
  nivelEsforco: string;

  @Column({ length: 1 })
  label: string;

  @Column()
  curso: string;

  @Column()
  periodo: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  descricao: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToMany(() => ProfessorEntity, (professor) => professor.materias)
  @JoinTable()
  professores: ProfessorEntity[];

  @ManyToMany(() => RelevantAreaEntity, (area) => area.materias)
  @JoinTable()
  areasRelevantes: RelevantAreaEntity[];

  @OneToMany(() => AvaliationEntity, (avaliacao) => avaliacao.materia)
  avaliacoes: AvaliationEntity[];

  constructor(materia?:Partial<MateriaEntity>){
    super();
    this.materiaId = materia?.materiaId;
    this.codigo = materia?.codigo;
    this.tipo = materia?.tipo;
    this.nivelEsforco = materia?.nivelEsforco;
    this.label = materia?.label;
    this.curso = materia?.curso;
    this.periodo = materia?.periodo;
    this.nome = materia?.nome;
    this.descricao = materia?.descricao;
    this.createdAt = materia?.createdAt;
    this.updatedAt = materia?.updatedAt;
    this.deletedAt = materia?.deletedAt;
    this.professores = materia?.professores;
    this.areasRelevantes = materia?.areasRelevantes;
    this.avaliacoes = materia?.avaliacoes;
  }
}

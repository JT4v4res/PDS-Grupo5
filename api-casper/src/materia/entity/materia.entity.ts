import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfessorEntity } from '../../professor/entity/professor.entity';
import { RelevantAreaEntity } from '../../relevant_area/entity/relevant_area.entity';
import { AvaliationEntity } from '../../avaliacao/entity/avaliation.entity';

@Entity()
export class MateriaEntity {
  @PrimaryGeneratedColumn()
  materiaId: number;

  @PrimaryColumn({ length: 25, nullable: false })
  codigo: string;

  @Column({ enum: ['Obrigatória', 'Eletiva'], nullable: false })
  tipo: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  descricao: string;

  @ManyToMany(() => RelevantAreaEntity, (professor) => professor.materias)
  @JoinTable()
  professores: ProfessorEntity[];

  @ManyToMany(() => RelevantAreaEntity, (area) => area.materias)
  @JoinTable()
  areasAtuacao: ProfessorEntity[];

  @OneToMany(() => AvaliationEntity, (avaliacao) => avaliacao.materia)
  avaliacoes: AvaliationEntity[];

  constructor(materia?: Partial<MateriaEntity>) {
    this.codigo = materia.codigo;
    this.tipo = materia.tipo;
    this.nome = materia.nome;
    this.descricao = materia.descricao;
    this.professores = materia.professores;
    this.areasAtuacao = materia.areasAtuacao;
    this.avaliacoes = materia.avaliacoes;
  }
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { MateriaEntity } from '../../materia/entity/materia.entity';
import { Avaliacao } from '../../avaliacao/avaliacao.entity';

@Entity()
export class ProfessorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column()
  descricao: string;

  @Column({ length: 255 })
  lattes: string;

  @OneToMany(() => Avaliacao, (avaliacao: Avaliacao) => avaliacao.professor)
  avaliacoes: Avaliacao[];

  @ManyToMany(
    () => MateriaEntity,
    (materia: MateriaEntity) => materia.professores,
  )
  materias: MateriaEntity[];

  constructor(professor?: Partial<ProfessorEntity>) {
    this.id = professor.id;
    this.nome = professor.nome;
    this.descricao = professor.descricao;
    this.lattes = professor.lattes;
    this.avaliacoes = professor.avaliacoes;
    this.materias = professor.materias;
  }
}

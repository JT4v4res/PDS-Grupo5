import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { MateriaEntity } from '../../materia/entity/materia.entity';
import { AvaliationEntity } from '../../avaliacao/entity/avaliation.entity';

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

  @OneToMany(
    () => AvaliationEntity,
    (avaliacao: AvaliationEntity) => avaliacao.professor,
  )
  avaliacoes: AvaliationEntity[];

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

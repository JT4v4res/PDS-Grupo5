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
import { Usuario } from '../../usuario/usuario.entity';
import { AreasAtuacao } from '../../area_atuacao/area_atuacao.entity';
import { Avaliacao } from '../../avaliacao/avaliacao.entity';

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

  @ManyToMany(() => ProfessorEntity, (professor) => professor.materias)
  @JoinTable()
  professores: ProfessorEntity[];

  @ManyToMany(() => AreasAtuacao, (area) => area.materias)
  @JoinTable()
  areasAtuacao: AreasAtuacao[];

  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.materia)
  avaliacoes: Avaliacao[];

  @ManyToMany(() => Usuario, (usuario) => usuario.materias)
  @JoinTable()
  usuarios: Usuario[];

  constructor(materia?: Partial<MateriaEntity>) {
    this.codigo = materia.codigo;
    this.tipo = materia.tipo;
    this.nome = materia.nome;
    this.descricao = materia.descricao;
    this.professores = materia.professores;
    this.areasAtuacao = materia.areasAtuacao;
    this.avaliacoes = materia.avaliacoes;
    this.usuarios = materia.usuarios;
  }
}

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { Materia } from '../materia/materia.entity'
import { Avaliacao } from '../avaliacao/avaliacao.entity'


@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  usuarioId: number;

  @Column({ nullable: false, type: 'text' })
  nome: string;

  @Column({ nullable: false, type: 'int' })
  matricula: number;

  @Column({ nullable: false, type: 'int' })
  historicoId: number;

  @ManyToMany(() => Materia, (materia) => materia.usuarios)
  materias: Materia[];

  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.usuario)
  avaliacoes: Avaliacao[];
}

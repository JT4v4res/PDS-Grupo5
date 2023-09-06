import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Materia } from '../materia/materia.entity'

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'text' })
  commentText: string;

  @Column({ nullable: false, type: 'int' })
  totalValuations: number;

  @Column({ nullable: false, type: 'int' })
  commId: number;

  @Column({ nullable: false, type: 'int' })
  userId: number;

  @ManyToOne(() => Materia, (comment) => comment.materia)
  materia: Materia
}

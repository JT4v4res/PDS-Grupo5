import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { MateriaEntity } from '../../materia/entity/materia.entity';

@Entity()
export class RelevantAreaEntity {
  @PrimaryGeneratedColumn()
  areaId: number;

  @Column()
  area: string;

  @ManyToMany(() => MateriaEntity, (materia) => materia.areasAtuacao)
  materias: MateriaEntity[];
}

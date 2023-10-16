import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, BaseEntity} from 'typeorm';
import { MateriaEntity } from '../../materia/entity/materia.entity';

@Entity()
export class RelevantAreaEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  areaId: number;

  @Column()
  area: string;

  @ManyToMany(() => MateriaEntity, (materia) => materia.areasRelevantes)
  materias: MateriaEntity[];

  constructor(relevantArea?: Partial<RelevantAreaEntity>) {
    super();
    this.areaId = relevantArea.areaId;
    this.area = relevantArea.area;
    this.materias = relevantArea.materias;
   }
}

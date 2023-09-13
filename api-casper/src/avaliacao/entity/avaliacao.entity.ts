import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn} from 'typeorm';
import { MateriaEntity } from '../materia/entity/materia.entity'
import { ProfessorEntity } from '../professor/entity/professor.entity'
import { Usuario } from '../usuario/usuario.entity'

@Entity()
export class Avaliacao {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.avaliacoes)
    usuario : Usuario;

    @ManyToOne(() => MateriaEntity, (materia) => materia.avaliacoes)
    materia : MateriaEntity;

    @ManyToOne(() => ProfessorEntity, (professor) => professor.avaliacoes)
    professor : ProfessorEntity;

    @Column()
    semestre:string;

    @Column() 
    nota_avaliacao: number;

    @Column('float') 
    nota_materia: number;

    @Column() 
    passeou_sem_final: boolean;

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

    @CreateDateColumn()
    data_avaliacao: Date;
}
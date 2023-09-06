import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn} from 'typeorm';
import { Materia } from '../materia/materia.entity'
import { Professor } from '../professor/professor.entity'
import { Usuario } from '../usuario/usuario.entity'

@Entity()
export class Avaliacao {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.avaliacoes)
    usuario : Usuario;

    @ManyToOne(() => Materia, (materia) => materia.avaliacoes)
    materia : Materia;

    @ManyToOne(() => Professor, (professor) => professor.avaliacoes)
    professor : Professor;

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
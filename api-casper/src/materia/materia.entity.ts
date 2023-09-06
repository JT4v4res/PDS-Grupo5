import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Professor } from '../professor/professor.entity'
import { Usuario } from '../usuario/usuario.entity'
import { AreasAtuacao } from '../area_atuacao/area_atuacao.entity'
import { Avaliacao } from '../avaliacao/avaliacao.entity'

@Entity()
export class Materia {

    @PrimaryColumn({ length: 25 })
    codigo: string;
    
    @Column({enum: ["Obrigatória", "Eletiva"]})
    tipo:string;

    @Column()
    nome:string;

    @Column()
    descricao:string;

    @ManyToMany(() => Professor, (professor) => professor.materias)
    @JoinTable()
    professores: Professor[];

    @ManyToMany(() => AreasAtuacao, (area) => area.materias)
    @JoinTable()
    areasAtuacao: AreasAtuacao[];

    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.materia)
    avaliacoes: Avaliacao[];

    @ManyToMany(() => Usuario, (usuario) => usuario.materias)
    @JoinTable()
    usuarios: Usuario[];
}
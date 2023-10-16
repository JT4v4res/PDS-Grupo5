import {
    Entity,
    Column,
    PrimaryColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
export class NotaEntity {

    @PrimaryGeneratedColumn()
    notaId: number;

    @PrimaryColumn({ nullable: false })
    matricula: string;

    materia: string;

    @Column({ nullable: false })
    ab1: number;

    @Column({ nullable: false })
    ab2: number;

    @Column()
    reav: number;

    @Column({ nullable: false })
    final: number;

    constructor(nota?:Partial<NotaEntity>){
      this.notaId = nota?.notaId;
      this.matricula = nota?.matricula;
      this.materia = nota?.materia;
      this.ab1 = nota?.ab1;
      this.ab2 = nota?.ab2;
      this.reav = nota?.reav;
      this.final = nota?.final;
    }
}

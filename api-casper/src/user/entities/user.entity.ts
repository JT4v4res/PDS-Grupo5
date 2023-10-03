import { PerfilacademicoEntity } from 'src/perfilacademico/entities/perfilacademico.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
  } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @OneToMany(() => PerfilacademicoEntity, (perfil: PerfilacademicoEntity) => perfil.matricula)
    perfis: PerfilacademicoEntity[];

}

import { PerfilacademicoEntity } from 'src/perfilacademico/entities/perfilacademico.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne
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

    @Column()
    userType: string;

    @OneToOne(() => PerfilacademicoEntity, (perfil: PerfilacademicoEntity) => perfil.matricula)
    perfil: PerfilacademicoEntity;

}

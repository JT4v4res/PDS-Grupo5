import { PerfilacademicoEntity } from 'src/perfilacademico/entities/perfilacademico.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({ nullable: true })
  userType: string;

  @OneToOne(() => PerfilacademicoEntity, (perfil) => perfil.user, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  perfil: PerfilacademicoEntity;
}

import { PerfilacademicoEntity } from 'src/perfilacademico/entities/perfilacademico.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { AvaliationEntity } from '../../avaliacao/entity/avaliation.entity';

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

  @OneToMany(
    () => AvaliationEntity,
    (valuations: AvaliationEntity) => valuations.user,
    {
      cascade: true,
      nullable: true,
    },
  )
  @JoinColumn()
  valuations: AvaliationEntity[];
}

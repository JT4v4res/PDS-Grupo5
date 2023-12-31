import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PerfilacademicoEntity } from 'src/perfilacademico/entities/perfilacademico.entity';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
import { PerfilacademicoModule } from '../perfilacademico/perfilacademico.module';
import { AvaliationEntity } from '../avaliacao/entity/avaliation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PerfilacademicoEntity,
      AvaliationEntity,
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '21600s' },
    }),
    PerfilacademicoModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule, UserService],
})
export class UserModule {}

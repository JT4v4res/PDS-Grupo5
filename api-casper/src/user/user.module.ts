import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PerfilacademicoEntity } from 'src/perfilacademico/entities/perfilacademico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PerfilacademicoEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule, UserService],
})
export class UserModule {}

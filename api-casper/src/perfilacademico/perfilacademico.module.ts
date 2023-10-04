import { Module } from '@nestjs/common';
import { PerfilacademicoService } from './perfilacademico.service';
import { PerfilacademicoController } from './perfilacademico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilacademicoEntity } from './entities/perfilacademico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PerfilacademicoEntity])],
  controllers: [PerfilacademicoController],
  providers: [PerfilacademicoService],
  exports: [TypeOrmModule],
})
export class PerfilacademicoModule {}

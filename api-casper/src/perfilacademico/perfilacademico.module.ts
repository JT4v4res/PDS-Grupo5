import { Module } from '@nestjs/common';
import { PerfilacademicoService } from './perfilacademico.service';
import { PerfilacademicoController } from './perfilacademico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilacademicoEntity } from './entities/perfilacademico.entity';
import { PeriodDataEntity } from './entities/periodData.entity';
import { MateriaPeriodoEntity } from './entities/materiaperiodo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PerfilacademicoEntity,
      PeriodDataEntity,
      MateriaPeriodoEntity,
    ]),
  ],
  controllers: [PerfilacademicoController],
  providers: [PerfilacademicoService],
  exports: [TypeOrmModule, PerfilacademicoService],
})
export class PerfilacademicoModule {}

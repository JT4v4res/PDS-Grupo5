import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliationEntity } from './entity/avaliation.entity';
import { AvaliationController } from './avaliation.controller';
import { AvaliationService } from './avaliation.service';
import { MateriaService } from '../materia/materia.service';
import { ProfessorService } from '../professor/professor.service';
import { MateriaModule } from '../materia/materia.module';
import { ProfessorModule } from '../professor/professor.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AvaliationEntity]),
    MateriaModule,
    ProfessorModule,
  ],
  controllers: [AvaliationController],
  providers: [AvaliationService, MateriaService, ProfessorService],
  exports: [TypeOrmModule],
})
export class AvaliationModule {}

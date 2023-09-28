import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaController } from './materia.controller';
import { MateriaService } from './materia.service';
import { MateriaEntity } from './entity/materia.entity';
import { ProfessorService } from '../professor/professor.service';
import { ProfessorModule } from '../professor/professor.module';

@Module({
  imports: [TypeOrmModule.forFeature([MateriaEntity]), ProfessorModule],
  controllers: [MateriaController],
  providers: [MateriaService, ProfessorService],
  exports: [TypeOrmModule, MateriaService],
})
export class MateriaModule {}

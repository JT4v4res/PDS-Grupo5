import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';
import { ProfessorEntity } from './entity/professor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessorEntity])],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}

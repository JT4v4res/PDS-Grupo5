import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorEntity } from './entity/professor.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Controller('/professor')
export class ProfessorController {
  constructor(private service: ProfessorService) {}

  @Get()
  async getProfessores(): Promise<ProfessorEntity[]> {
    return await this.service.getProfessores();
  }

  @Get(':professorId')
  async getProfessorPorId(
    @Param('professorId', ParseIntPipe) professorId: number,
  ): Promise<ProfessorEntity> {
    return await this.service.getProfessorPorId(professorId);
  }

  @Post()
  async createProfessor(
    @Body() professor: CreateProfessorDto,
  ): Promise<ProfessorEntity> {
    return await this.service.createProfessor(professor);
  }

  @Put()
  async updateProfessor(
    @Body() professor: UpdateProfessorDto,
  ): Promise<UpdateResult> {
    return await this.service.updateProfessor(professor);
  }

  @Delete(':professorId')
  async deleteProfessor(
    @Param('professorId', ParseIntPipe) professorId: number,
  ): Promise<DeleteResult> {
    return await this.service.deleteProfessor(professorId);
  }
}

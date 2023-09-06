import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe} from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { Professor } from './professor.entity';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';

@Controller('professor')
export class ProfessorController {
    constructor(private service: ProfessorService) { }

    @Get()
    getProfessores(): Promise<Professor[]> {
        return this.service.getProfessores();
    }

    @Get(':professorId')
    getProfessorPorId(@Param('professorId', ParseIntPipe) professorId: number) : Promise<Professor> {
        return this.service.getProfessorPorId(professorId);
    }

    @Post()
    createProfessor(@Body() professor: Professor) : Promise<InsertResult> {
        return this.service.createProfessor(professor);
    }

    @Put()
    updateProfessor(@Body() professor: Professor) : Promise<UpdateResult> {
        return this.service.updateProfessor(professor);
    }

    @Delete(':professorId')
    deleteProfessor(@Param('professorId', ParseIntPipe) professorId: number) : Promise<DeleteResult>{
        return this.service.deleteProfessor(professorId);
    }
}
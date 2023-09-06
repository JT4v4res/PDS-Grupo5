import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe} from '@nestjs/common';
import { MateriaService } from './materia.service';
import { Materia } from './materia.entity';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';

@Controller('materia')
export class MateriaController {
    constructor(private service: MateriaService) { }

    @Get()
    getMaterias(): Promise<Materia[]> {
        return this.service.getMaterias();
    }

    @Get(':materiaId')
    getMateriaPorId(@Param('materiaId', ParseIntPipe) materiaId: number) : Promise<Materia> {
        return this.service.getMateriaPorId(materiaId);
    }

    @Get('/professor/:professorId')
    getMateriasPorProfessor(@Param('professorId', ParseIntPipe) professorId: number) : Promise<Materia[]> {
        return this.service.getMateriasPorProfessor(professorId);
    }

    @Post()
    createMateria(@Body() materia: Materia) : Promise<InsertResult> {
        return this.service.createMateria(materia);
    }

    @Put()
    updateMateria(@Body() materia: Materia) : Promise<UpdateResult> {
        return this.service.updateMateria(materia);
    }

    @Delete(':materiaId')
    deleteMateria(@Param('materiaId', ParseIntPipe) materiaId: number) : Promise<DeleteResult>{
        return this.service.deleteMateria(materiaId);
    }
}
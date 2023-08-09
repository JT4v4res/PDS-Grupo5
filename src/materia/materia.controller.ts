import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe} from '@nestjs/common';
import { MateriaService } from './materia.service';
import { Materia } from './materia.entity';

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
    createProfessor(@Body() materia: Materia) : Promise<void> {
        return this.service.createProfessor(materia);
    }

    @Put()
    updateProfessor(@Body() materia: Materia) : Promise<void> {
        return this.service.updateProfessor(materia);
    }

    @Delete(':materiaId')
    deleteProfessor(@Param('materiaId', ParseIntPipe) materiaId: number) : Promise<void>{
        return this.service.deleteProfessor(materiaId);
    }
}
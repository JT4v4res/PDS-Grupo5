import { Controller, Get, Post, Body, Patch, Param, Delete,
  ParseIntPipe, } from '@nestjs/common';
import { NotaEntity } from './entities/nota.entity'
import { NotasService } from '../../src/notas/notas.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@Controller('/notas')
export class NotasController {
  constructor(private notasService: NotasService) {}
/*
  @Get()
  async getNotas(): Promise<NotaEntity[]> {
    return await this.notasService.getNotas();
  }

  @Post()
  createNota(@Body() createNotaDto: CreateNotaDto) {
    return this.notasService.createNota(createNotaDto);
  }

  @Get(':id')
  getNotaById(@Param('id', ParseIntPipe) id: number) {
    return this.notasService.getNotaById(+id);
  }

  @Patch(':id')
  updateNota(@Param('id', ParseIntPipe) id: number) {
    return this.notasService.updateNota(+id);
  }

  @Delete(':id')
  deleteNota(@Param('id', ParseIntPipe) id: number) {
    return this.notasService.deleteNota(:id);
  }*/
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotaEntity } from './entities/nota.entity'
import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@Controller('/notas')
export class NotasController {
  constructor(private notasService: NotasService) {}

  @Get()
  async getNotas(): Promise<NotaEntity[]> {
    return await this.notasService.getNotas();
  }

  @Post()
  create(@Body() createNotaDto: CreateNotaDto) {
    return this.notasService.createNota(createNotaDto);
  }

  @Get(':id')
  getNotaById(@Param('id') id: string) {
    return this.notasService.getNotaById(+id);
  }

  @Patch(':id')
  updateNota(@Param('id') id: string, @Body() updateNotaDto: UpdateNotaDto) {
    return this.notasService.updateNota(+id, updateNotaDto);
  }

  @Delete(':id')
  deleteNota(@Param('id') id: string) {
    return this.notasService.deleteNota(+id);
  }
}

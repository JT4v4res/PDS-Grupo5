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
import { MateriaService } from './materia.service';
import { MateriaEntity } from './entity/materia.entity';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Controller('materia')
export class MateriaController {
  constructor(private readonly service: MateriaService) {}

  @Get()
  async getMaterias(): Promise<MateriaEntity[]> {
    return await this.service.getMaterias();
  }

  @Get(':materiaId')
  async getMateriaPorId(
    @Param('materiaId', ParseIntPipe) materiaId: number,
  ): Promise<MateriaEntity> {
    return await this.service.getMateriaPorId(materiaId);
  }

  @Post()
  async createMateria(
    @Body() materia: CreateMateriaDto,
  ): Promise<MateriaEntity> {
    return await this.service.createMateria(materia);
  }

  @Put()
  async updateMateria(
    @Body() materia: UpdateMateriaDto,
  ): Promise<MateriaEntity> {
    return await this.service.updateMateria(materia);
  }

  @Delete(':materiaId')
  async deleteMateria(
    @Param('materiaId', ParseIntPipe) materiaId: number,
  ): Promise<void> {
    return await this.service.deleteMateria(materiaId);
  }
}

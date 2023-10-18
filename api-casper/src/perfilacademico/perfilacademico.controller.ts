import { Controller, 
  Get, 
  Post, 
  Body, 
  Put, 
  Param, 
  Delete,
  ParseIntPipe, } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { PerfilacademicoService } from './perfilacademico.service';
import { CreatePerfilacademicoDto } from './dto/create-perfilacademico.dto';
import { UpdatePerfilacademicoDto } from './dto/update-perfilacademico.dto';
import { PerfilacademicoEntity } from './entities/perfilacademico.entity';


@Controller('/perfilacademico')
export class PerfilacademicoController {
  constructor(private service: PerfilacademicoService) {}

  @Post()
  async createPerfil(@Body() perfil: CreatePerfilacademicoDto): Promise<PerfilacademicoEntity> {
    return await this.service.createPerfil(perfil);
  }

  @Get()
  async getPerfis(): Promise<PerfilacademicoEntity[]> {
    return await this.service.getPerfis();
  }

  @Get(':id')
  async getPerfilById(@Param('id', ParseIntPipe) id: number): Promise<PerfilacademicoEntity> {

    return await this.service.getPerfilById(id);

  }

  @Put()
  async updatePerfil(@Body() perfil: UpdatePerfilacademicoDto): Promise<UpdateResult> {
    return await this.service.updatePerfil(perfil);
  }

  @Put()
  async attPontuacao(@Body() perfil: UpdatePerfilacademicoDto): Promise<PerfilacademicoEntity> {

    return await this.service.attPontuacao(perfil.id);
  }

  @Delete(':perfilID')
  async deletePerfil(@Param('perfilID', ParseIntPipe) perfilID: number) {
    return await this.service.deletePerfil(perfilID);
  }
}

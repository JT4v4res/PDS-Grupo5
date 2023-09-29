import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AvaliationService } from './avaliation.service';
import { AvaliationEntity } from './entity/avaliation.entity';
import { CreateAvaliationDto } from './dto/create-avaliation.dto';
import { UpdateAvaliationDto } from './dto/update-avaliation.dto';
import { UpdateResult } from 'typeorm';
import { ReturnAvaliationDto } from './dto/return-avaliation.dto';

@Controller('/avaliation')
export class AvaliationController {
  constructor(private readonly avaliationService: AvaliationService) {}

  @Get()
  async getAvaliations(): Promise<AvaliationEntity[]> {
    try {
      return await this.avaliationService.getAvaliations();
    } catch (e) {
      console.log(e);
    }
  }

  @Get('/avaliationId/:id')
  async getAvaliationsById(
    @Param('id') avaliationId: number,
  ): Promise<AvaliationEntity> {
    try {
      return await this.avaliationService.getAvaliationsById(avaliationId);
    } catch (e) {
      console.log(e);
    }
  }

  @Get('/materia/:id')
  async getAvaliationsByMateria(
    @Param('id') materiaId: number,
  ): Promise<ReturnAvaliationDto> {
    try {
      return await this.avaliationService.getAvaliationsByMateria(materiaId);
    } catch (e) {
      console.log(e);
    }
  }

  @Post()
  async createAvaliation(
    @Body() avaliation: CreateAvaliationDto,
  ): Promise<AvaliationEntity> {
    try {
      return await this.avaliationService.createAvaliation(avaliation);
    } catch (e) {
      console.log(e.detail);
    }
  }

  @Put()
  async updateAvaliation(
    @Body() avaliaton: UpdateAvaliationDto,
  ): Promise<UpdateResult> {
    try {
      return await this.avaliationService.updateAvaliation(avaliaton);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete(':id')
  async deleteAvaliation(@Param('id') avaliationId: number): Promise<void> {
    try {
      return await this.avaliationService.deleteAvaliation(avaliationId);
    } catch (e) {
      console.log(e);
    }
  }
}

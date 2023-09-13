import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AvaliationService } from './avaliation.service';
import { AvaliationEntity } from './entity/avaliation.entity';
import { CreateAvaliationDto } from './dto/create-avaliation.dto';
import { UpdateAvaliationDto } from './dto/update-avaliation.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('/avaliaton')
export class AvaliationController {
  constructor(private readonly avaliationService: AvaliationService) {}

  @Get()
  async getAvaliations(): Promise<AvaliationEntity[]> {
    try {
      return await this.avaliationService.getAvaliations();
    } catch (e) {
      await this.handleError(e);
    }
  }

  @Get(':id')
  async getAvaliationsById(
    @Param(':id') avaliationId: number,
  ): Promise<AvaliationEntity> {
    try {
      return await this.avaliationService.getAvaliationsById(avaliationId);
    } catch (e) {
      await this.handleError(e);
    }
  }

  @Post()
  async createAvaliation(
    @Body() avaliation: CreateAvaliationDto,
  ): Promise<AvaliationEntity> {
    try {
      return await this.avaliationService.createAvaliation(avaliation);
    } catch (e) {
      await this.handleError(e);
    }
  }

  @Put()
  async updateAvaliation(
    @Body() avaliaton: UpdateAvaliationDto,
  ): Promise<UpdateResult> {
    try {
      return await this.avaliationService.updateAvaliation(avaliaton);
    } catch (e) {
      await this.handleError(e);
    }
  }

  @Delete(':id')
  async deleteAvaliation(
    @Param('id') avaliationId: number,
  ): Promise<DeleteResult> {
    try {
      return await this.avaliationService.deleteAvaliation(avaliationId);
    } catch (e) {
      await this.handleError(e);
    }
  }

  async handleError(error: HttpException): Promise<void> {
    throw new HttpException(
      {
        statusCode: error.getStatus(),
        error: error.message,
      },
      error.getStatus(),
      {
        cause: error,
      },
    );
  }
}

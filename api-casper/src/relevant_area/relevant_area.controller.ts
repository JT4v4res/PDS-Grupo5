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
import { RelevantAreaEntity } from './entity/relevant_area.entity';
import { RelevantAreaService } from './relevant_area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('/relevantArea/')
export class RelevantAreaController {
  constructor(private readonly relevantAreaService: RelevantAreaService) {}

  @Get()
  async getRelevantAreas(): Promise<RelevantAreaEntity[]> {
    try {
      return await this.relevantAreaService.getRelevantAreas();
    } catch (e) {
      await this.handleError(e);
    }
  }

  @Get(':id')
  async getRelevantAreasById(
    @Param(':id') areaId: number,
  ): Promise<RelevantAreaEntity> {
    try {
      return await this.relevantAreaService.getRelevantAreasById(areaId);
    } catch (e) {
      await this.handleError(e);
    }
  }

  @Post()
  async createRelevantArea(
    @Body() relevantArea: CreateAreaDto,
  ): Promise<RelevantAreaEntity> {
    try {
      return await this.relevantAreaService.createRelevantArea(relevantArea);
    } catch (e) {
      await this.handleError(e);
    }
  }

  @Put()
  async updateRelevantArea(
    @Body() relevantArea: UpdateAreaDto,
  ): Promise<UpdateResult> {
    try {
      return await this.relevantAreaService.updateRelevantArea(relevantArea);
    } catch (e) {
      await this.handleError(e);
    }
  }

  @Delete(':id')
  async deleteRelevantArea(
    @Param(':id') areaId: number,
  ): Promise<DeleteResult> {
    try {
      return await this.relevantAreaService.deleteRelevantArea(areaId);
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

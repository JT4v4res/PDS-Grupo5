import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { RelevantAreaEntity } from './entity/relevant_area.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class RelevantAreaService {
  constructor(
    @InjectRepository(RelevantAreaEntity)
    private readonly relevantAreaRepository: Repository<RelevantAreaEntity>,
  ) {}

  async getRelevantAreas(): Promise<RelevantAreaEntity[]> {
    return await this.relevantAreaRepository.find();
  }

  async getRelevantAreasById(areaId: number): Promise<RelevantAreaEntity> {
    return await this.relevantAreaRepository.findOneBy({ areaId: areaId });
  }

  async createRelevantArea(
    relevantArea: CreateAreaDto,
  ): Promise<RelevantAreaEntity> {
    const newRelevantArea: RelevantAreaEntity =
      await this.relevantAreaRepository.create(relevantArea);

    if (newRelevantArea) {
      return await this.relevantAreaRepository.save(newRelevantArea);
    }

    throw new HttpException(
      `Relevant area not created`,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  async updateRelevantArea(relevantArea: UpdateAreaDto): Promise<UpdateResult> {
    const updated: UpdateResult = await this.relevantAreaRepository.update(
      { areaId: relevantArea.areaId },
      relevantArea,
    );

    if (!updated) {
      throw new HttpException(
        `Area not updated!`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return updated;
  }

  async deleteRelevantArea(areaId: number): Promise<DeleteResult> {
    const deleted: DeleteResult = await this.relevantAreaRepository.delete({
      areaId: areaId,
    });

    if (!deleted) {
      throw new HttpException(
        'Area not deleted!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return deleted;
  }
}

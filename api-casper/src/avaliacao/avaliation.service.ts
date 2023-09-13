import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AvaliationEntity } from './entity/avaliation.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateAvaliationDto } from './dto/create-avaliation.dto';
import { UpdateAvaliationDto } from './dto/update-avaliation.dto';

@Injectable()
export class AvaliationService {
  constructor(
    @InjectRepository(AvaliationEntity)
    private readonly avaliationRepository: Repository<AvaliationEntity>,
  ) {}

  async getAvaliations(): Promise<AvaliationEntity[]> {
    return await this.avaliationRepository.find();
  }

  async getAvaliationsById(avaliationId: number): Promise<AvaliationEntity> {
    return await this.avaliationRepository.findOneBy({
      avaliationId: avaliationId,
    });
  }

  async createAvaliation(
    avaliation: CreateAvaliationDto,
  ): Promise<AvaliationEntity> {
    const newAvaliation: AvaliationEntity =
      await this.avaliationRepository.create(avaliation);

    if (newAvaliation) {
      return await this.avaliationRepository.save(newAvaliation);
    }

    throw new HttpException(
      "Can't create avaliation!",
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  async updateAvaliation(
    avaliation: UpdateAvaliationDto,
  ): Promise<UpdateResult> {
    const updated: UpdateResult = await this.avaliationRepository.update(
      { avaliationId: avaliation.avaliacaoId },
      avaliation,
    );

    if (updated) {
      return updated;
    }

    throw new HttpException(
      "Can't update avaliation",
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  async deleteAvaliation(avaliationId: number): Promise<DeleteResult> {
    const deleted: DeleteResult = await this.avaliationRepository.delete({
      avaliationId: avaliationId,
    });

    if (deleted) {
      return deleted;
    }

    throw new HttpException(
      "Can't delete the avaliation",
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}

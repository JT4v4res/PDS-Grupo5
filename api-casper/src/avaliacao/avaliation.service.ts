import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AvaliationEntity } from './entity/avaliation.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateAvaliationDto } from './dto/create-avaliation.dto';
import { UpdateAvaliationDto } from './dto/update-avaliation.dto';
import { ProfessorService } from '../professor/professor.service';
import { MateriaService } from '../materia/materia.service';
import { ReturnAvaliationDto } from './dto/return-avaliation.dto';

@Injectable()
export class AvaliationService {
  constructor(
    @InjectRepository(AvaliationEntity)
    private readonly avaliationRepository: Repository<AvaliationEntity>,
    private readonly professorService: ProfessorService,
    private readonly materiaService: MateriaService,
  ) {}

  async getAvaliations(): Promise<AvaliationEntity[]> {
    return await this.avaliationRepository.find();
  }

  async getAvaliationsById(avaliationId: number): Promise<AvaliationEntity> {
    return await this.avaliationRepository.findOneBy({
      avaliationId: avaliationId,
    });
  }

  async getAvaliationsByMateria(
    materiaId: number,
  ): Promise<ReturnAvaliationDto> {
    const materia = await this.materiaService.getMateriaPorId(materiaId);

    const avaliations: AvaliationEntity[] = materia.avaliacoes;

    const firstApprovalArray: AvaliationEntity[] = avaliations.filter(
      (avaliation) => avaliation.primeira_aprovacao != false,
    );
    const firsApprovalCount: number = firstApprovalArray.reduce(
      (count, item) => count + 1,
      0,
    );

    const startRec: AvaliationEntity[] = avaliations.filter(
      (avaliation) => avaliation.recomenda_no_inicio != false,
    );
    const startRecCount: number = startRec.reduce(
      (count, item) => count + 1,
      0,
    );

    const concludedArray: AvaliationEntity[] = avaliations.filter(
      (avaliation) => avaliation,
    );
    const concludedCount: number = concludedArray.reduce(
      (count, item) => count + 1,
      0,
    );

    const dedicationArray: AvaliationEntity[] = avaliations.filter(
      (avaliation) => avaliation.dedicacao,
    );
    const dedicationCount: number = dedicationArray.reduce(
      (count, item) => count + item.dedicacao,
      0,
    );

    const didatic: AvaliationEntity[] = avaliations.filter(
      (avaliation) => avaliation.didatica,
    );
    const didaticCount: number = didatic.reduce(
      (count, item) => count + item.didatica,
      0,
    );

    const totalValuations: number = avaliations.length;

    avaliations.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

    const mostRecent = avaliations[0].updatedAt;

    return {
      firstApproval: firsApprovalCount,
      didatics: didaticCount,
      concluded: concludedCount,
      inStart: startRecCount,
      dedication: dedicationCount,
      totalValuations: totalValuations,
      lastValuation: mostRecent,
    };
  }

  async createAvaliation(
    avaliation: CreateAvaliationDto,
  ): Promise<AvaliationEntity> {
    const newAvaliation: AvaliationEntity =
      await this.avaliationRepository.create(avaliation);

    let rParam;

    if (avaliation.isMateria !== false) {
      rParam = await this.materiaService.getMateriasForValuation(
        avaliation.relationshipId,
      );
      if (rParam) {
        newAvaliation.materia = rParam;
        console.log(rParam);
      }
    } else if (avaliation.isTeacher !== false) {
      rParam = await this.professorService.getProfessorPorId(
        avaliation.relationshipId,
      );
      if (rParam) {
        newAvaliation.professor = rParam;
        console.log(rParam);
      }
    }

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

  async deleteAvaliation(avaliationId: number): Promise<void> {
    const avaliation: AvaliationEntity =
      await this.avaliationRepository.findOneBy({
        avaliationId: avaliationId,
      });

    if (!avaliation) {
      throw new HttpException(
        `User with ID ${avaliationId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    avaliation.deletedAt = new Date();
    await this.avaliationRepository.save(avaliation);
  }
}

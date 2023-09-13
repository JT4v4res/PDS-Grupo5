import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { MateriaEntity } from './entity/materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessorEntity } from '../professor/entity/professor.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(MateriaEntity)
    private materiaRepository: Repository<MateriaEntity>,
  ) {}

  async getMaterias(): Promise<MateriaEntity[]> {
    const materias: MateriaEntity[] = await this.materiaRepository.find();
    if (!materias) {
      throw new HttpException('Materias not found', HttpStatus.NOT_FOUND);
    }
    return materias;
  }

  async getMateriaPorId(idMateria: number): Promise<MateriaEntity> {
    if (!idMateria) {
      throw new HttpException(
        'One parameteres are undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }
    const materia: MateriaEntity = await this.materiaRepository.findOneBy({
      materiaId: idMateria,
    });
    if (!materia) {
      throw new HttpException('Materia not found', HttpStatus.NOT_FOUND);
    }
    return materia;
  }

  async getProfessoresPorMateria(
    idMateria: number,
  ): Promise<ProfessorEntity[]> {
    const materia: MateriaEntity = await this.getMateriaPorId(idMateria);
    if (!materia.professores) {
      throw new HttpException('Professores not found', HttpStatus.NOT_FOUND);
    }
    return materia.professores;
  }

  async createMateria(materia: CreateMateriaDto): Promise<MateriaEntity> {
    const newMateria: MateriaEntity = this.materiaRepository.create(materia);
    newMateria.professores = undefined;
    newMateria.avaliacoes = undefined;
    newMateria.areasAtuacao = undefined;
    await this.materiaRepository.save(newMateria);
    return newMateria;
  }

  async updateMateria(materia: UpdateMateriaDto): Promise<UpdateResult> {
    const updated: UpdateResult = await this.materiaRepository.update(
      { materiaId: materia.materiaId },
      materia,
    );
    if (updated.affected === 0) {
      throw new HttpException(
        'Materia not edited',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return updated;
  }

  async deleteMateria(idMateria: number): Promise<DeleteResult> {
    const deleted: DeleteResult = await this.materiaRepository.delete({
      materiaId: idMateria,
    });

    if (deleted) {
      if (deleted.affected === 0) {
        throw new HttpException(
          'Materia not deleted',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return deleted;
  }
}

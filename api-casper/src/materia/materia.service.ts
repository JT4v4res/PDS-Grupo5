import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { MateriaEntity } from './entity/materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessorEntity } from '../professor/entity/professor.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { ProfessorService } from '../professor/professor.service';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(MateriaEntity)
    private readonly materiaRepository: Repository<MateriaEntity>,
    private readonly professorService: ProfessorService,
  ) {}

  async getMaterias(): Promise<MateriaEntity[]> {
    const materias: MateriaEntity[] = await this.materiaRepository.find();
    if (!materias) {
      throw new HttpException('Materias not found', HttpStatus.NOT_FOUND);
    }
    return materias;
  }

  async getMateriasForValuation(idMateria: number): Promise<MateriaEntity> {
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

  async getMateriaPorId(idMateria: number): Promise<MateriaEntity> {
    if (!idMateria) {
      throw new HttpException(
        'One parameteres are undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }
    const materia: MateriaEntity = await this.materiaRepository.findOne({
      where: { materiaId: idMateria },
      relations: {
        professores: true,
        avaliacoes: true,
        areasAtuacao: true,
      },
    });

    if (!materia) {
      throw new HttpException('Materia not found', HttpStatus.NOT_FOUND);
    }
    return materia;
  }

  async createMateria(materia: CreateMateriaDto): Promise<MateriaEntity> {
    const newMateria: MateriaEntity =
      await this.materiaRepository.create(materia);

    const teacher: ProfessorEntity =
      await this.professorService.getTeacherByName(materia.professor);

    if (
      newMateria.professores !== undefined &&
      newMateria.professores !== null
    ) {
      newMateria.professores.push(teacher);
    } else {
      newMateria.professores = [teacher];
    }

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

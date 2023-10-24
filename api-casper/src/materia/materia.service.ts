import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { MateriaEntity } from './entity/materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessorEntity } from '../professor/entity/professor.entity';
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
    const materias: MateriaEntity[] = await this.materiaRepository.find({
      relations: {
        professores: true,
        avaliacoes: true,
        areasAtuacao: true,
      },
    });
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

  async updateMateria(materia: UpdateMateriaDto): Promise<MateriaEntity> {
    const materiaToUpdt: MateriaEntity = await this.getMateriaPorId(
      materia.materiaId,
    );

    materiaToUpdt.areaRelevante = materia.areaRelevante;
    materiaToUpdt.literatura = materia.literatura;
    materiaToUpdt.questions = materia.questions;
    materiaToUpdt.matExpositivo = materia.matExpositivo;

    const teacher: ProfessorEntity =
      await this.professorService.getTeacherByName(materia.professor);

    materiaToUpdt.professores.push(teacher);

    return await this.materiaRepository.save(materiaToUpdt);
  }

  async deleteMateria(idMateria: number): Promise<void> {
    const deleted: MateriaEntity = await this.materiaRepository.findOneBy({
      materiaId: idMateria,
    });

    if (!deleted) {
      throw new HttpException(
        `Materia with ID ${idMateria} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    deleted.deletedAt = new Date();
    await this.materiaRepository.save(deleted);
  }
}

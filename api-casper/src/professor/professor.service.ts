import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { ProfessorEntity } from './entity/professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(ProfessorEntity)
    private professorRepository: Repository<ProfessorEntity>,
  ) {}

  async getProfessores(): Promise<ProfessorEntity[]> {
    const professores: ProfessorEntity[] =
      await this.professorRepository.find();
    if (!professores) {
      throw new HttpException('Professores not found', HttpStatus.NOT_FOUND);
    }
    return professores;
  }

  async getProfessorPorId(idProfessor: number): Promise<ProfessorEntity> {
    if (!idProfessor) {
      throw new HttpException(
        'One parameteres are undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }
    const professor: ProfessorEntity = await this.professorRepository.findOneBy(
      { id: idProfessor },
    );
    if (!professor) {
      throw new HttpException('Professor not found', HttpStatus.NOT_FOUND);
    }
    return professor;
  }

  async getTeacherByName(teacher: string): Promise<ProfessorEntity> {
    if (!teacher) {
      throw new HttpException(
        'One parameteres are undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }
    const teacherFound: ProfessorEntity =
      await this.professorRepository.findOneBy({ nome: teacher });
    if (!teacherFound) {
      throw new HttpException('Professor not found', HttpStatus.NOT_FOUND);
    }
    return teacherFound;
  }

  async createProfessor(
    professor: CreateProfessorDto,
  ): Promise<ProfessorEntity> {
    const newProfessor: ProfessorEntity =
      this.professorRepository.create(professor);

    await this.professorRepository.save<ProfessorEntity>(newProfessor);

    return newProfessor;
  }

  async updateProfessor(professor: UpdateProfessorDto): Promise<UpdateResult> {
    const updated: UpdateResult = await this.professorRepository.update(
      { id: professor.id },
      professor,
    );

    if (updated) {
      if (updated.affected === 0) {
        throw new HttpException(
          'Professor not edited',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return updated;
  }

  async deleteProfessor(idProfessor: number): Promise<DeleteResult> {
    const deleted: DeleteResult = await this.professorRepository.delete({
      id: idProfessor,
    });

    if (deleted) {
      if (deleted.affected === 0) {
        throw new HttpException(
          'Professor not deleted',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return deleted;
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

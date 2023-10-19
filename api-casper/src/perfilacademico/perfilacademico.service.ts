import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreatePerfilacademicoDto } from './dto/create-perfilacademico.dto';
import { UpdatePerfilacademicoDto } from './dto/update-perfilacademico.dto';
import { PerfilacademicoEntity } from './entities/perfilacademico.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PerfilacademicoService {
  constructor(
    @InjectRepository(PerfilacademicoEntity)
    private readonly perfilAcademicoRepository: Repository<PerfilacademicoEntity>,
  ) {}

  async createPerfil(
    perfil: CreatePerfilacademicoDto,
  ): Promise<PerfilacademicoEntity> {
    const newPerfil: PerfilacademicoEntity =
        this.perfilAcademicoRepository.create(perfil);

    newPerfil.semestre = '';
    newPerfil.periodo = 1;
    newPerfil.pontuacao = 0;
    newPerfil.progresso = 0;

    const profile =
      await this.perfilAcademicoRepository.save<PerfilacademicoEntity>(
        newPerfil,
      );

    return profile;
  }

  async getPerfis(): Promise<PerfilacademicoEntity[]> {
    const perfis: PerfilacademicoEntity[] =
      await this.perfilAcademicoRepository.find();

    if (!perfis) {
      throw new HttpException('Perfis not found', HttpStatus.NOT_FOUND);
    }

    return perfis;
  }

  async getPerfilById(id: number): Promise<PerfilacademicoEntity> {
    if (!id) {
      throw new HttpException(
        'Parameter undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }

    const perfil: PerfilacademicoEntity =
      await this.perfilAcademicoRepository.findOneBy({ id: id });

    if (!perfil) {
      throw new HttpException('Perfil not found', HttpStatus.NOT_FOUND);
    }

    return perfil;
  }

  async getPerfilByMatricula(
    matricula: string,
  ): Promise<PerfilacademicoEntity> {
    if (!matricula) {
      throw new HttpException(
        'Parameter undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }

    const perfil: PerfilacademicoEntity =
      await this.perfilAcademicoRepository.findOneBy({ matricula: matricula });

    if (!perfil) {
      throw new HttpException('Perfil not found', HttpStatus.NOT_FOUND);
    }

    return perfil;
  }

  async updatePerfil(perfil: UpdatePerfilacademicoDto): Promise<UpdateResult> {
    const updated: UpdateResult = await this.perfilAcademicoRepository.update(
      { id: 1 },
      perfil,
    );

    if (updated) {
      if (updated.affected === 0) {
        throw new HttpException(
          'Perfil not edited',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return updated;
  }

  async deletePerfil(idPerfil: number): Promise<DeleteResult> {
    const deleted: DeleteResult = await this.perfilAcademicoRepository.delete({
      id: idPerfil,
    });

    if (deleted) {
      if (deleted.affected === 0) {
        throw new HttpException(
          'Perfil not deleted',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return deleted;
  }
}

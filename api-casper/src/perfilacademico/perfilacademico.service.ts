import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreatePerfilacademicoDto } from './dto/create-perfilacademico.dto';
import { UpdatePerfilacademicoDto } from './dto/update-perfilacademico.dto';
import { PerfilacademicoEntity } from './entities/perfilacademico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { PeriodDataEntity } from './entities/periodData.entity';
import { MateriaPeriodoEntity } from './entities/materiaperiodo.entity';

@Injectable()
export class PerfilacademicoService {
  constructor(
    @InjectRepository(PerfilacademicoEntity)
    private readonly perfilAcademicoRepository: Repository<PerfilacademicoEntity>,
    @InjectRepository(PeriodDataEntity)
    private readonly periodDataRepository: Repository<PeriodDataEntity>,
    @InjectRepository(MateriaPeriodoEntity)
    private readonly materiaPeriodoRepository: Repository<MateriaPeriodoEntity>,
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
      await this.perfilAcademicoRepository.find({
        relations: [
          'materias_cursadas',
          'materias_restantes',
          'disciplinas_matriculado',
          'periodData',
          'periodData.materiasPeriodo',
        ],
      });

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
      await this.perfilAcademicoRepository.findOne({
        where: { id: id },
        relations: [
          'materias_cursadas',
          'materias_restantes',
          'disciplinas_matriculado',
          'periodData',
          'periodData.materiasPeriodo',
        ],
      });

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

  async updateByPdf(id: number): Promise<void> {
    const jsonFile = fs.readFileSync('./update/update.json', 'utf-8');

    const json = JSON.parse(jsonFile);

    const resultado = {};

    for (const propriedade in json) {
      if (json.hasOwnProperty(propriedade)) {
        if (propriedade === 'periodos') {
          resultado[propriedade] = {};
          for (const periodo in json[propriedade]) {
            if (json[propriedade].hasOwnProperty(periodo)) {
              resultado[propriedade][periodo] = {};

              const disciplinasArray = [];

              for (
                let i = 0;
                i < json[propriedade][periodo].disciplinas.length;
                i++
              ) {
                const materiaExist: MateriaPeriodoEntity =
                  await this.materiaPeriodoRepository.findOne({
                    where: {
                      Nome: json[propriedade][periodo],
                    },
                  });

                if (
                  materiaExist !== undefined &&
                  materiaExist !== null &&
                  materiaExist.Conceito !== 'AP'
                ) {
                  disciplinasArray.push(
                    json[propriedade][periodo].disciplinas[i],
                  );
                } else if (
                  materiaExist === null ||
                  materiaExist === undefined
                ) {
                  disciplinasArray.push(
                    json[propriedade][periodo].disciplinas[i],
                  );
                }
              }

              const newMateriaPeriodo: MateriaPeriodoEntity[] =
                this.materiaPeriodoRepository.create(disciplinasArray);

              await this.materiaPeriodoRepository.save(newMateriaPeriodo);

              resultado['coeficiente'] =
                json[propriedade][periodo]['COEFICIENTE SEMESTRAL'];
              resultado['qntDisciplinas'] =
                json[propriedade][periodo]['Número de Disciplinas'];

              resultado['periodo'] = periodo;
              resultado['materiasPeriodo'] = newMateriaPeriodo;

              delete json[propriedade][periodo].disciplinas;

              const newPeriodData: PeriodDataEntity =
                this.periodDataRepository.create(resultado);

              await this.periodDataRepository.save(newPeriodData);

              const profile: PerfilacademicoEntity =
                await this.perfilAcademicoRepository.findOne({
                  where: { id: id },
                  relations: ['periodData', 'periodData.materiasPeriodo'],
                });

              console.log(newPeriodData);

              if (
                profile.periodData !== null &&
                profile.periodData !== undefined
              ) {
                profile.periodData.push(newPeriodData);
              } else {
                profile.periodData = [newPeriodData];
              }

              profile.pontuacao += 10;

              await this.perfilAcademicoRepository.save(profile);
            }
          }
        }
      }
    }

    return;
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

import { Test, TestingModule } from '@nestjs/testing';
import { PerfilacademicoController } from '../../perfilacademico/perfilacademico.controller';
import { PerfilacademicoService } from '../../perfilacademico/perfilacademico.service';
import { PerfilacademicoEntity } from '../../perfilacademico/entities/perfilacademico.entity';
import { CreatePerfilacademicoDto } from 'src/perfilacademico/dto/create-perfilacademico.dto';
import { UpdatePerfilacademicoDto } from 'src/perfilacademico/dto/update-perfilacademico.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { exec } from 'child_process';

const perfilacademicoList: PerfilacademicoEntity[] = [
  new PerfilacademicoEntity({
    matricula: '103635369',
    id: 1,
    curso: 'Ciência da Computação',
    universidade: 'UFAL',
    semestre: '2023.1',
    periodo: 3,
    materias_cursadas: null,
    materias_restantes: null,
    pontuacao: 200,
    disciplinas_matriculado: null,
    notas: null,
    progresso: 0.3,
  }),
  new PerfilacademicoEntity({
    matricula: '113635369',
    id: 2,
    curso: 'Ciência da Computação',
    universidade: 'UFAL',
    semestre: '2023.1',
    periodo: 3,
    materias_cursadas: null,
    materias_restantes: null,
    pontuacao: 200,
    disciplinas_matriculado: null,
    notas: null,
    progresso: 0.3,
  }),
  new PerfilacademicoEntity({
    matricula: '103435369',
    id: 3,
    curso: 'Ciência da Computação',
    universidade: 'UFAL',
    semestre: '2023.1',
    periodo: 7,
    materias_cursadas: null,
    materias_restantes: null,
    pontuacao: 200,
    disciplinas_matriculado: null,
    notas: null,
    progresso: 0.8,
  }),
  new PerfilacademicoEntity({
    matricula: '103636769',
    id: 4,
    curso: 'Ciência da Computação',
    universidade: 'UFAL',
    semestre: '2023.1',
    periodo: 8,
    materias_cursadas: null,
    materias_restantes: null,
    pontuacao: 200,
    disciplinas_matriculado: null,
    notas: null,
    progresso: 0.9,
  }),
];

const newPerfilacademico: PerfilacademicoEntity = new PerfilacademicoEntity({
  matricula: '103635369',
  id: 8,
  curso: 'Engenharia da Computação',
  universidade: 'UFAL',
});

const updatedPerfilAcademico: PerfilacademicoEntity = new PerfilacademicoEntity({
  matricula: '103635369',
  id: 8,
  curso: 'Ciência da Computação',
  universidade: 'UFAL',
});

describe('PerfilacademicoController', () => {
  let perfilAcademicocontroller: PerfilacademicoController;
  let perfilAcademicoService: PerfilacademicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilacademicoController],
      providers: [
        {
        provide: PerfilacademicoService,
        useValue:{
          createPerfil: jest.fn().mockResolvedValue(newPerfilacademico),
          getPerfis: jest.fn().mockResolvedValue(perfilacademicoList),
          getPerfilById: jest.fn().mockResolvedValue(perfilacademicoList[0]),
          updatePerfil: jest.fn().mockResolvedValue(updatedPerfilAcademico),
          attPontuacao: jest.fn().mockResolvedValue(1),
          deletePerfil: jest.fn().mockResolvedValue(undefined),
        }
      }],
    }).compile();

    perfilAcademicocontroller = module.get<PerfilacademicoController>(PerfilacademicoController);
    perfilAcademicoService = module.get<PerfilacademicoService>(PerfilacademicoService);
  });

  it('should be defined', () => {
    expect(perfilAcademicocontroller).toBeDefined();
    expect(perfilAcademicoService).toBeDefined();
  });

  describe('getPerfis', (): void => {
    it('should return a list of profiles successfully', async (): Promise<void> => {
      const result: PerfilacademicoEntity[] = await perfilAcademicocontroller.getPerfis();

      expect(result).toEqual(perfilacademicoList);
      expect(result).toBeInstanceOf(Array<PerfilacademicoEntity>);
      expect(perfilAcademicoService.getPerfis).toBeCalledTimes(1);

    });

    it('should throw an exception', () => {
      jest
        .spyOn(perfilAcademicoService, 'getPerfis')
        .mockRejectedValueOnce(new Error());

      expect(perfilAcademicoService.getPerfis()).rejects.toThrowError();

    });

  })

  describe('getPerfilById', (): void => {
    it('should return a specific profile successfully', async (): Promise<void> => {
      const result: PerfilacademicoEntity = await perfilAcademicocontroller.getPerfilById(1);

      expect(result).toEqual(perfilacademicoList[0]);
      expect(result).toBeInstanceOf(PerfilacademicoEntity);
      expect(perfilAcademicoService.getPerfilById).toHaveBeenCalledTimes(1);
      expect(perfilAcademicoService.getPerfilById).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', () => {
      jest
        .spyOn(perfilAcademicoService, 'getPerfilById')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(perfilAcademicoService.getPerfilById(1)).rejects.toThrowError();
    });
  });

  describe('createPerfil', (): void => {
    it('should create a profile successfully', async (): Promise<void> =>{
      const body: CreatePerfilacademicoDto = {
        matricula: '1931739',
        id: 1,
        curso: 'Engenharia da Computação',
        universidade: 'UFAL'
      };

      const result: PerfilacademicoEntity = await perfilAcademicocontroller.createPerfil(body);

      expect(result).toBeDefined();
      expect(result).toEqual(newPerfilacademico);
      expect(result).toBeInstanceOf(PerfilacademicoEntity);
      expect(perfilAcademicoService.createPerfil).toHaveBeenCalledTimes(1);
      expect(perfilAcademicoService.createPerfil).toHaveBeenCalledWith(body);

    });

    it('should throw an exception', (): void => {
      const body: CreatePerfilacademicoDto = {
        matricula: '1931739',
        id: 1,
        curso: 'Engenharia da Computação',
        universidade: 'UFAL'
      };

      jest
        .spyOn(perfilAcademicoService, 'createPerfil')
        .mockRejectedValueOnce(new Error());
      
      expect(perfilAcademicoService.createPerfil(body)).rejects.toThrowError();

    });
  
  });

  
  describe('updatePerfil', (): void => {
    it('should update a profile successfully and return it', async (): Promise<void> => {

      const body: UpdatePerfilacademicoDto = {
        matricula: '1931739',
        id: 1,
        curso: 'Ciência da Computação',
        universidade: 'UFAL'
      };

      const result: UpdateResult = await perfilAcademicocontroller.updatePerfil(body);

      expect(result).toBeDefined();
      expect(result).toEqual(updatedPerfilAcademico);
      expect(result).toBeInstanceOf(PerfilacademicoEntity);
      expect(perfilAcademicoService.updatePerfil).toHaveBeenCalledTimes(1);
      expect(perfilAcademicoService.updatePerfil).toBeCalledWith(body);

    });

    it('should throw an exception', () => {

      const body: UpdatePerfilacademicoDto = {
        matricula: '1931739',
        id: 1,
        curso: 'Ciência da Computação',
        universidade: 'UFAL'
      };

      jest
        .spyOn(perfilAcademicoService, 'updatePerfil')
        .mockRejectedValueOnce(new Error());
      
      expect(perfilAcademicoService.updatePerfil(body)).rejects.toThrowError();

    });
  
  });

  describe('deletePerfil', (): void => {
    it('should delete a profile successfully', async (): Promise<void> => {

      const result: void = await perfilAcademicocontroller.deletePerfil(1);

      expect(result).toBeUndefined();
      expect(perfilAcademicoService.deletePerfil).toHaveBeenCalledTimes(1);
      expect(perfilAcademicoService.deletePerfil).toHaveBeenCalledWith(1);

    });

    it('should throw an exception', () => {
      jest
        .spyOn(perfilAcademicoService, 'deletePerfil')
        .mockRejectedValueOnce(new Error());
      
      expect(perfilAcademicoService.deletePerfil(1)).rejects.toThrowError();

    });
  });

  /*
  describe('attPontuacao', (): void => {
    it('should update a profile with +1 in its pontuation', () => {

    });

    it('should throw an exception', () => {

    });
  
  });
  */

});

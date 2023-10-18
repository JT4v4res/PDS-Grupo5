import { Test, TestingModule } from '@nestjs/testing';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateAvaliationDto } from '../../avaliacao/dto/update-avaliation.dto';
import { AvaliationEntity } from '../../avaliacao/entity/avaliation.entity';
import { AvaliationController } from '../../avaliacao/avaliation.controller';
import { AvaliationService } from '../../avaliacao/avaliation.service';
import { CreateAvaliationDto } from '../../avaliacao/dto/create-avaliation.dto';
import { ProfessorService } from '../../professor/professor.service';
import { MateriaService } from '../../materia/materia.service';

const AvaliationEntityList: AvaliationEntity[] = [
  new AvaliationEntity({
    dedicacao: 1,
    materia: undefined,
    metodologia: 3,
    nota_avaliacao: 4,
    nota_materia: 5,
    passou_sem_final: false,
    periodo: 3,
    presenca: 4,
    professor: undefined,
    recomenda_no_inicio: false,
    semestre: '2023.1',
    didatica: 0,
    avaliationId: 1,
  }),
  new AvaliationEntity({
    dedicacao: 1,
    materia: undefined,
    metodologia: 3,
    nota_avaliacao: 4,
    nota_materia: 5,
    passou_sem_final: false,
    periodo: 3,
    presenca: 4,
    professor: undefined,
    recomenda_no_inicio: false,
    semestre: '2022.2',
    didatica: 0,
    avaliationId: 2,
  }),
  new AvaliationEntity({
    dedicacao: 1,
    materia: undefined,
    metodologia: 3,
    nota_avaliacao: 4,
    nota_materia: 5,
    passou_sem_final: false,
    periodo: 3,
    presenca: 4,
    professor: undefined,
    recomenda_no_inicio: false,
    semestre: '2022.1',
    didatica: 0,
    avaliationId: 3,
  }),
];

const newAvaliation: AvaliationEntity = new AvaliationEntity({
  dedicacao: 6,
  metodologia: 3,
  nota_avaliacao: 3,
  nota_materia: 8,
  passou_sem_final: true,
  periodo: 7,
  presenca: 1,
  recomenda_no_inicio: true,
  semestre: '2024.1',
  didatica: 8,
});

const updatedAvaliation: AvaliationEntity = new AvaliationEntity({
  dedicacao: 6,
  metodologia: 3,
  nota_avaliacao: 3,
  nota_materia: 8,
  passou_sem_final: true,
  periodo: 7,
  presenca: 1,
  recomenda_no_inicio: true,
  semestre: '2025.1',
  didatica: 8,
});

describe('AvaliationController', (): void => {
  let avaliationController: AvaliationController;
  let avaliationService: AvaliationService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliationController],
      providers: [
        {
          provide: AvaliationService,
          useValue: {
            getAvaliations: jest.fn().mockResolvedValue(AvaliationEntityList),
            getAvaliationsById: jest
              .fn()
              .mockResolvedValue(AvaliationEntityList[0]),
            createAvaliation: jest.fn().mockResolvedValue(newAvaliation),
            updateAvaliation: jest.fn().mockResolvedValue(updatedAvaliation),
            deleteAvaliation: jest.fn().mockResolvedValue(undefined),
          },
        },{
          provide: ProfessorService,
          useValue: createMock<ProfessorService>(),
        }
      ],
    }).compile();

    avaliationController =
      module.get<AvaliationController>(AvaliationController);
    avaliationService = module.get<AvaliationService>(AvaliationService);
  });

  it('should be defined', (): void => {
    expect(avaliationController).toBeDefined();
    expect(avaliationService).toBeDefined();
  });

  describe('getAvaliations', (): void => {
    it('should return a list of relevant areas successfully', async (): Promise<void> => {
      // Act
      const result: AvaliationEntity[] =
        await avaliationController.getAvaliations();

      // Assert
      expect(result).toEqual(AvaliationEntityList);
      expect(result).toBeInstanceOf(Array<AvaliationEntity>);
      expect(avaliationService.getAvaliations).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(avaliationService, 'getAvaliations')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(avaliationService.getAvaliations).rejects.toThrowError();
    });
  });

  describe('getAvaliationsById', (): void => {
    it('should return a specific relevant area successfulyy', async (): Promise<void> => {
      // Act
      const result: AvaliationEntity =
        await avaliationController.getAvaliationsById(1);

      // Assert
      expect(result).toEqual(AvaliationEntityList[0]);
      expect(result).toBeInstanceOf(AvaliationEntity);
      expect(avaliationService.getAvaliationsById).toHaveBeenCalledTimes(1);
      expect(avaliationService.getAvaliationsById).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(avaliationService, 'getAvaliationsById')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(avaliationService.getAvaliationsById(1)).rejects.toThrowError();
    });
  });

  describe('createAvaliation', (): void => {
    it('should create a new relevant area succssfully and return it', async (): Promise<void> => {
      // Arrange
      const body: CreateAvaliationDto = {
        dedicacao: 6,
        metodologia: 3,
        nota_avaliacao: 3,
        nota_materia: 8,
        passou_sem_final: true,
        periodo: 7,
        presenca: 1,
        recomenda_no_inicio: true,
        semestre: '2024.1',
        didatica: 8,
        relationshipId: 3,
        primeira_aprovacao: true,
      };

      // Act
      const result: AvaliationEntity =
        await avaliationController.createAvaliation(body);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(newAvaliation);
      expect(result).toBeInstanceOf(AvaliationEntity);
      expect(avaliationService.createAvaliation).toHaveBeenCalledTimes(1);
      expect(avaliationService.createAvaliation).toHaveBeenCalledWith(body);
    });

    it('should throw an error', (): void => {
      // Arrange
      const body: CreateAvaliationDto = {
        dedicacao: 6,
        metodologia: 3,
        nota_avaliacao: 3,
        nota_materia: 8,
        passou_sem_final: true,
        periodo: 7,
        presenca: 1,
        recomenda_no_inicio: true,
        semestre: '2024.1',
        didatica: 8,
        relationshipId: 2,
        primeira_aprovacao: false,
      };

      jest
        .spyOn(avaliationService, 'createAvaliation')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(avaliationService.createAvaliation(body)).rejects.toThrowError();
    });
  });

  describe('updateAvaliation', (): void => {
    it('should update a relevant area succesffuly and return it', async (): Promise<void> => {
      // Arrange
      const body: UpdateAvaliationDto = {
        dedicacao: 6,
        metodologia: 3,
        nota_avaliacao: 3,
        nota_materia: 8,
        passou_sem_final: true,
        periodo: 7,
        presenca: 1,
        recomenda_no_inicio: true,
        semestre: '2025.1',
        didatica: 8,
        avaliacaoId: 4,
        relationshipId: 3,
        primeira_aprovacao: true,
      };

      // Act
      const result: UpdateResult =
        await avaliationController.updateAvaliation(body);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(updatedAvaliation);
      expect(result).toBeInstanceOf(AvaliationEntity);
      expect(avaliationService.updateAvaliation).toHaveBeenCalledTimes(1);
      expect(avaliationService.updateAvaliation).toHaveBeenCalledWith(body);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const body: UpdateAvaliationDto = {
        dedicacao: 6,
        metodologia: 3,
        nota_avaliacao: 3,
        nota_materia: 8,
        passou_sem_final: true,
        periodo: 7,
        presenca: 1,
        recomenda_no_inicio: true,
        semestre: '2025.1',
        didatica: 8,
        avaliacaoId: 4,
        relationshipId: 3,
        primeira_aprovacao: true,
      };

      jest
        .spyOn(avaliationService, 'updateAvaliation')
        .mockRejectedValueOnce(new Error());

      // Act
      expect(avaliationService.updateAvaliation(body)).rejects.toThrowError();
    });
  });

  describe('deleteAvaliation', (): void => {
    it('should delete an relevant area successfully', async (): Promise<void> => {
      // Act
      const result: void =
        await avaliationController.deleteAvaliation(1);

      // Assert
      expect(result).toBeUndefined();
      expect(avaliationService.deleteAvaliation).toHaveBeenCalledTimes(1);
      expect(avaliationService.deleteAvaliation).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(avaliationService, 'deleteAvaliation')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(avaliationService.deleteAvaliation(1)).rejects.toThrowError();
    });
  });
});

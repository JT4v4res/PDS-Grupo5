import { Test, TestingModule } from '@nestjs/testing';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AvaliationEntity } from '../../avaliacao/entity/avaliation.entity';
import { AvaliationService } from '../../avaliacao/avaliation.service';
import { CreateAvaliationDto } from '../../avaliacao/dto/create-avaliation.dto';
import { UpdateAvaliationDto } from '../../avaliacao/dto/update-avaliation.dto';
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

describe('AvaliationService', (): void => {
  let avaliationService: AvaliationService;
  let avaliationRepository: Repository<AvaliationEntity>;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AvaliationService,
        {
          provide: getRepositoryToken(AvaliationEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(AvaliationEntityList),
            findOneBy: jest.fn().mockResolvedValue(AvaliationEntityList[0]),
            create: jest.fn().mockReturnValue(AvaliationEntityList[0]),
            save: jest.fn().mockResolvedValue(AvaliationEntityList[0]),
            update: jest.fn().mockResolvedValue(updatedAvaliation),
            delete: jest.fn().mockResolvedValue(undefined),
          },
        },{
          provide: ProfessorService,
          useValue: createMock<ProfessorService>(),
        },{
          provide: MateriaService,
          useValue: createMock<MateriaService>()
        }
      ],
    }).compile();

    avaliationService = module.get<AvaliationService>(AvaliationService);
    avaliationRepository = module.get<Repository<AvaliationEntity>>(
      getRepositoryToken(AvaliationEntity),
    );
  });

  it('should be defined', (): void => {
    expect(avaliationService).toBeDefined();
    expect(avaliationRepository).toBeDefined();
  });

  describe('getAvaliations', (): void => {
    it('should return an array of professores successfully', async (): Promise<void> => {
      // Act
      const result: AvaliationEntity[] =
        await avaliationService.getAvaliations();

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(AvaliationEntityList);
      expect(result).toBeInstanceOf(Array<AvaliationEntity>);
      expect(avaliationRepository.find).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(avaliationRepository, 'find')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(avaliationRepository.find()).rejects.toThrowError();
    });
  });

  describe('getAvaliationsById', (): void => {
    it('should return a professor successfully', async (): Promise<void> => {
      // Act
      const result: AvaliationEntity =
        await avaliationService.getAvaliationsById(1);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(AvaliationEntityList[0]);
      expect(result).toBeInstanceOf(AvaliationEntity);
      expect(avaliationRepository.findOneBy).toHaveBeenCalledTimes(1);
      expect(avaliationRepository.findOneBy).toHaveBeenCalledWith({
        avaliationId: 1,
      });
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(avaliationRepository, 'findOneBy')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(
        avaliationRepository.findOneBy({ avaliationId: 1 }),
      ).rejects.toThrowError();
    });
  });

  describe('createAvaliation', (): void => {
    it('should create a new avaliation successfully and return it', async (): Promise<void> => {
      // Arrange
      const data: CreateAvaliationDto = {
        dedicacao: 1,
        metodologia: 3,
        nota_avaliacao: 4,
        nota_materia: 5,
        passou_sem_final: false,
        periodo: 3,
        presenca: 4,
        recomenda_no_inicio: false,
        semestre: '2023.1',
        didatica: 0,
        relationshipId: 3,
        primeira_aprovacao: true,
      };

      // Act
      const result: AvaliationEntity =
        await avaliationService.createAvaliation(data);
      
        // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(AvaliationEntityList[0]);
      expect(result).toBeInstanceOf(AvaliationEntity);
      expect(avaliationRepository.create).toHaveBeenCalledTimes(1);
      expect(avaliationRepository.save).toHaveBeenCalledTimes(1);
    });
    it('should throw an exception', (): void => {
      // Arrange

      const data: CreateAvaliationDto = {
        dedicacao: 1,
        metodologia: 3,
        nota_avaliacao: 4,
        nota_materia: 5,
        passou_sem_final: false,
        periodo: 3,
        presenca: 4,
        recomenda_no_inicio: false,
        semestre: '2023.1',
        didatica: 0,
        relationshipId: 3,
        primeira_aprovacao: true,
      };

      jest
        .spyOn(avaliationRepository, 'save')
        .mockRejectedValueOnce(new Error());
      // Assert
      expect(avaliationService.createAvaliation(data)).rejects.toThrowError();
    });
  });

  describe('updateAvaliation', (): void => {
    it('should update a professor successfully and return it', async (): Promise<void> => {
      // Arrange
      const data: UpdateAvaliationDto = {
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
        await avaliationService.updateAvaliation(data);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(updatedAvaliation);
      expect(result).toBeInstanceOf(AvaliationEntity);
      expect(avaliationRepository.update).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const data: UpdateAvaliationDto = {
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
        .spyOn(avaliationRepository, 'update')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(avaliationService.updateAvaliation(data)).rejects.toThrowError();
    });
  });

  describe('deleteAvaliation', (): void => {
    it('should delete a professor successfully', async (): Promise<void> => {
      // Act
      const result: void = await avaliationService.deleteAvaliation(1);

      // Assert
      expect(result).toBeUndefined();
      expect(avaliationRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(avaliationRepository, 'save')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(avaliationService.deleteAvaliation(1)).rejects.toThrowError();
    });
  });
});

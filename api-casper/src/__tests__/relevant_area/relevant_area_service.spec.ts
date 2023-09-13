import { Test, TestingModule } from '@nestjs/testing';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RelevantAreaService } from '../../relevant_area/relevant_area.service';
import { RelevantAreaEntity } from '../../relevant_area/entity/relevant_area.entity';
import { CreateAreaDto } from 'src/relevant_area/dto/create-area.dto';
import { UpdateAreaDto } from 'src/relevant_area/dto/update-area.dto';

const relevantAreaEntityList: RelevantAreaEntity[] = [
  new RelevantAreaEntity({
    areaId: 1,
    area: 'otimizacao',
    materias: null,
  }),
  new RelevantAreaEntity({
    areaId: 2,
    area: 'data science',
    materias: null,
  }),
  new RelevantAreaEntity({
    areaId: 3,
    area: 'devops',
    materias: null,
  }),
];

const updatedArea: RelevantAreaEntity = new RelevantAreaEntity({
  area: 'ia',
});

describe('RelevantAreaService', (): void => {
  let relevantAreaService: RelevantAreaService;
  let relevantAreaRepository: Repository<RelevantAreaEntity>;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RelevantAreaService,
        {
          provide: getRepositoryToken(RelevantAreaEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(relevantAreaEntityList),
            findOneBy: jest.fn().mockResolvedValue(relevantAreaEntityList[0]),
            create: jest.fn().mockReturnValue(relevantAreaEntityList[0]),
            save: jest.fn().mockResolvedValue(relevantAreaEntityList[0]),
            update: jest.fn().mockResolvedValue(updatedArea),
            delete: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    relevantAreaService = module.get<RelevantAreaService>(RelevantAreaService);
    relevantAreaRepository = module.get<Repository<RelevantAreaEntity>>(
      getRepositoryToken(RelevantAreaEntity),
    );
  });

  it('should be defined', (): void => {
    expect(relevantAreaService).toBeDefined();
    expect(relevantAreaRepository).toBeDefined();
  });

  describe('getRelevantAreas', (): void => {
    it('should return an array of professores successfully', async (): Promise<void> => {
      // Act
      const result: RelevantAreaEntity[] =
        await relevantAreaService.getRelevantAreas();

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(relevantAreaEntityList);
      expect(result).toBeInstanceOf(Array<RelevantAreaEntity>);
      expect(relevantAreaRepository.find).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(relevantAreaRepository, 'find')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(relevantAreaRepository.find()).rejects.toThrowError();
    });
  });

  describe('getRelevantAreasById', (): void => {
    it('should return a professor successfully', async (): Promise<void> => {
      // Act
      const result: RelevantAreaEntity =
        await relevantAreaService.getRelevantAreasById(1);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(relevantAreaEntityList[0]);
      expect(result).toBeInstanceOf(RelevantAreaEntity);
      expect(relevantAreaRepository.findOneBy).toHaveBeenCalledTimes(1);
      expect(relevantAreaRepository.findOneBy).toHaveBeenCalledWith({
        areaId: 1,
      });
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(relevantAreaRepository, 'findOneBy')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(
        relevantAreaRepository.findOneBy({ areaId: 1 }),
      ).rejects.toThrowError();
    });
  });

  describe('createRelevantArea', (): void => {
    it('should create a new professor successfully and return it', async (): Promise<void> => {
      // Arrange
      const data: CreateAreaDto = {
        area: 'so',
      };

      // Act
      const result: RelevantAreaEntity =
        await relevantAreaService.createRelevantArea(data);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(relevantAreaEntityList[0]);
      expect(result).toBeInstanceOf(RelevantAreaEntity);
      expect(relevantAreaRepository.create).toHaveBeenCalledTimes(1);
      expect(relevantAreaRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const data: CreateAreaDto = {
        area: 'so',
      };

      jest
        .spyOn(relevantAreaRepository, 'save')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(
        relevantAreaService.createRelevantArea(data),
      ).rejects.toThrowError();
    });
  });

  describe('updateRelevantArea', (): void => {
    it('should update a professor successfully and return it', async (): Promise<void> => {
      // Arrange
      const data: UpdateAreaDto = {
        areaId: 4,
        area: 'ia',
      };

      // Act
      const result: UpdateResult =
        await relevantAreaService.updateRelevantArea(data);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(updatedArea);
      expect(result).toBeInstanceOf(RelevantAreaEntity);
      expect(relevantAreaRepository.update).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const data: UpdateAreaDto = {
        areaId: 4,
        area: 'ia',
      };

      jest
        .spyOn(relevantAreaRepository, 'update')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(
        relevantAreaService.updateRelevantArea(data),
      ).rejects.toThrowError();
    });
  });

  describe('deleteRelevantArea', (): void => {
    it('should delete a professor successfully', async (): Promise<void> => {
      // Act
      const result: DeleteResult =
        await relevantAreaService.deleteRelevantArea(1);

      // Assert
      expect(result).toBeUndefined();
      expect(relevantAreaRepository.delete).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(relevantAreaRepository, 'delete')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(relevantAreaService.deleteRelevantArea(1)).rejects.toThrowError();
    });
  });
});

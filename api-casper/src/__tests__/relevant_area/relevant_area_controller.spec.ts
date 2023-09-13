import { Test, TestingModule } from '@nestjs/testing';
import { DeleteResult, UpdateResult } from 'typeorm';
import { RelevantAreaController } from '../../relevant_area/relevant_area.controller';
import { RelevantAreaService } from '../../relevant_area/relevant_area.service';
import { RelevantAreaEntity } from '../../relevant_area/entity/relevant_area.entity';
import { CreateAreaDto } from '../../relevant_area/dto/create-area.dto';
import { UpdateAreaDto } from '../../relevant_area/dto/update-area.dto';

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

const newArea: RelevantAreaEntity = new RelevantAreaEntity({
  area: 'so',
});

const updatedArea: RelevantAreaEntity = new RelevantAreaEntity({
  area: 'ia',
});

describe('RelevantAreaController', (): void => {
  let areaController: RelevantAreaController;
  let areaService: RelevantAreaService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelevantAreaController],
      providers: [
        {
          provide: RelevantAreaService,
          useValue: {
            getRelevantAreas: jest
              .fn()
              .mockResolvedValue(relevantAreaEntityList),
            getRelevantAreasById: jest
              .fn()
              .mockResolvedValue(relevantAreaEntityList[0]),
            createRelevantArea: jest.fn().mockResolvedValue(newArea),
            updateRelevantArea: jest.fn().mockResolvedValue(updatedArea),
            deleteRelevantArea: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    areaController = module.get<RelevantAreaController>(RelevantAreaController);
    areaService = module.get<RelevantAreaService>(RelevantAreaService);
  });

  it('should be defined', (): void => {
    expect(areaController).toBeDefined();
    expect(areaService).toBeDefined();
  });

  describe('getRelevantAreas', (): void => {
    it('should return a list of relevant areas successfully', async (): Promise<void> => {
      // Act
      const result: RelevantAreaEntity[] =
        await areaController.getRelevantAreas();

      // Assert
      expect(result).toEqual(relevantAreaEntityList);
      expect(result).toBeInstanceOf(Array<RelevantAreaEntity>);
      expect(areaService.getRelevantAreas).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(areaService, 'getRelevantAreas')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(areaService.getRelevantAreas).rejects.toThrowError();
    });
  });

  describe('getRelevantAreasById', (): void => {
    it('should return a specific relevant area successfulyy', async (): Promise<void> => {
      // Act
      const result: RelevantAreaEntity =
        await areaController.getRelevantAreasById(1);

      // Assert
      expect(result).toEqual(relevantAreaEntityList[0]);
      expect(result).toBeInstanceOf(RelevantAreaEntity);
      expect(areaService.getRelevantAreasById).toHaveBeenCalledTimes(1);
      expect(areaService.getRelevantAreasById).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(areaService, 'getRelevantAreasById')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(areaService.getRelevantAreasById(1)).rejects.toThrowError();
    });
  });

  describe('createRelevantArea', (): void => {
    it('should create a new relevant area succssfully and return it', async (): Promise<void> => {
      // Arrange
      const body: CreateAreaDto = {
        area: 'so',
      };

      // Act
      const result: RelevantAreaEntity =
        await areaController.createRelevantArea(body);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(newArea);
      expect(result).toBeInstanceOf(RelevantAreaEntity);
      expect(areaService.createRelevantArea).toHaveBeenCalledTimes(1);
      expect(areaService.createRelevantArea).toHaveBeenCalledWith(body);
    });

    it('should throw an error', (): void => {
      // Arrange
      const body: CreateAreaDto = {
        area: 'so',
      };

      jest
        .spyOn(areaService, 'createRelevantArea')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(areaService.createRelevantArea(body)).rejects.toThrowError();
    });
  });

  describe('updateRelevantArea', (): void => {
    it('should update a relevant area succesffuly and return it', async (): Promise<void> => {
      // Arrange
      const body: UpdateAreaDto = {
        areaId: 4,
        area: 'ia',
      };

      // Act
      const result: UpdateResult =
        await areaController.updateRelevantArea(body);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(updatedArea);
      expect(result).toBeInstanceOf(RelevantAreaEntity);
      expect(areaService.updateRelevantArea).toHaveBeenCalledTimes(1);
      expect(areaService.updateRelevantArea).toHaveBeenCalledWith(body);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const body: UpdateAreaDto = {
        areaId: 4,
        area: 'ia',
      };

      jest
        .spyOn(areaService, 'updateRelevantArea')
        .mockRejectedValueOnce(new Error());

      // Act
      expect(areaService.updateRelevantArea(body)).rejects.toThrowError();
    });
  });

  describe('deleteRelevantArea', (): void => {
    it('should delete an relevant area successfully', async (): Promise<void> => {
      // Act
      const result: DeleteResult = await areaController.deleteRelevantArea(1);

      // Assert
      expect(result).toBeUndefined();
      expect(areaService.deleteRelevantArea).toHaveBeenCalledTimes(1);
      expect(areaService.deleteRelevantArea).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(areaService, 'deleteRelevantArea')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(areaService.deleteRelevantArea(1)).rejects.toThrowError();
    });
  });
});

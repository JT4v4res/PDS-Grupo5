import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorController } from '../../professor/professor.controller';
import { ProfessorService } from '../../professor/professor.service';
import { ProfessorEntity } from '../../professor/entity/professor.entity';
import { CreateProfessorDto } from '../../professor/dto/create-professor.dto';
import { UpdateProfessorDto } from '../../professor/dto/update-professor.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

const professorEntityList: ProfessorEntity[] = [
  new ProfessorEntity({
    id: 1,
    nome: 'professor 1',
    descricao: 'professor de calculo 1',
    lattes: 'link-lattes 1',
    avaliacoes: null,
    materias: null,
  }),
  new ProfessorEntity({
    id: 2,
    nome: 'professor 2',
    descricao: 'professor de compiladores',
    lattes: 'link-lattes 2',
    avaliacoes: null,
    materias: null,
  }),
  new ProfessorEntity({
    id: 3,
    nome: 'professor 3',
    descricao: 'professor de estruturas de dados',
    lattes: 'link-lattes 3',
    avaliacoes: null,
    materias: null,
  }),
];

const newProfessor: ProfessorEntity = new ProfessorEntity({
  nome: 'professor 4',
  descricao: 'professor de calculo 2',
  lattes: 'link-lattes 4',
});

const updatedProfessor: ProfessorEntity = new ProfessorEntity({
  nome: 'professor 4',
  descricao: 'professor de calculo 3',
  lattes: 'link-lattes 4.5',
});

describe('ProfessorController', (): void => {
  let professorController: ProfessorController;
  let professorService: ProfessorService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessorController],
      providers: [
        {
          provide: ProfessorService,
          useValue: {
            getProfessores: jest.fn().mockResolvedValue(professorEntityList),
            getProfessorPorId: jest
              .fn()
              .mockResolvedValue(professorEntityList[0]),
            createProfessor: jest.fn().mockResolvedValue(newProfessor),
            updateProfessor: jest.fn().mockResolvedValue(updatedProfessor),
            deleteProfessor: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    professorController = module.get<ProfessorController>(ProfessorController);
    professorService = module.get<ProfessorService>(ProfessorService);
  });

  it('should be defined', (): void => {
    expect(professorController).toBeDefined();
    expect(professorService).toBeDefined();
  });

  describe('getProfessores', (): void => {
    it('should return a list of professores successfully', async (): Promise<void> => {
      // Act
      const result: ProfessorEntity[] =
        await professorController.getProfessores();

      // Assert
      expect(result).toEqual(professorEntityList);
      expect(result).toBeInstanceOf(Array<ProfessorEntity>);
      expect(professorService.getProfessores).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(professorService, 'getProfessores')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorService.getProfessores()).rejects.toThrowError();
    });
  });

  describe('getProfessoresPorId', (): void => {
    it('should return a specific professor successfulyy', async (): Promise<void> => {
      // Act
      const result: ProfessorEntity =
        await professorController.getProfessorPorId(1);

      // Assert
      expect(result).toEqual(professorEntityList[0]);
      expect(result).toBeInstanceOf(ProfessorEntity);
      expect(professorService.getProfessorPorId).toHaveBeenCalledTimes(1);
      expect(professorService.getProfessorPorId).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(professorService, 'getProfessorPorId')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorService.getProfessorPorId(1)).rejects.toThrowError();
    });
  });

  describe('createProfessor', (): void => {
    it('should create a new professor succssfully and return it', async (): Promise<void> => {
      // Arrenge
      const body: CreateProfessorDto = {
        nome: 'professor 4',
        descricao: 'professor de calculo 2',
        lattes: 'link-lattes 4',
      };

      // Act
      const result: ProfessorEntity =
        await professorController.createProfessor(body);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(newProfessor);
      expect(result).toBeInstanceOf(ProfessorEntity);
      expect(professorService.createProfessor).toHaveBeenCalledTimes(1);
      expect(professorService.createProfessor).toHaveBeenCalledWith(body);
    });

    it('should throw an error', (): void => {
      // Arrange
      const body: CreateProfessorDto = {
        nome: 'professor 4',
        descricao: 'professor de calculo 2',
        lattes: 'link-lattes 4',
      };

      jest
        .spyOn(professorService, 'createProfessor')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorService.createProfessor(body)).rejects.toThrowError();
    });
  });

  describe('updateProfessor', (): void => {
    it('should update a professor succesffuly and return it', async (): Promise<void> => {
      // Arrange
      const body: UpdateProfessorDto = {
        id: 4,
        nome: 'professor 4',
        descricao: 'professor de calculo 3',
        lattes: 'link-lattes 4.5',
      };

      // Act
      const result: UpdateResult =
        await professorController.updateProfessor(body);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(updatedProfessor);
      expect(result).toBeInstanceOf(ProfessorEntity);
      expect(professorService.updateProfessor).toHaveBeenCalledTimes(1);
      expect(professorService.updateProfessor).toHaveBeenCalledWith(body);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const body: UpdateProfessorDto = {
        id: 4,
        nome: 'professor 4',
        descricao: 'professor de calculo 3',
        lattes: 'link-lattes 4.5',
      };

      jest
        .spyOn(professorService, 'updateProfessor')
        .mockRejectedValueOnce(new Error());

      // Act
      expect(professorService.updateProfessor(body)).rejects.toThrowError();
    });
  });

  describe('deleteProfessor', (): void => {
    it('should delete an professor successfully', async (): Promise<void> => {
      // Act
      const result: DeleteResult = await professorController.deleteProfessor(1);

      // Assert
      expect(result).toBeUndefined();
      expect(professorService.deleteProfessor).toHaveBeenCalledTimes(1);
      expect(professorService.deleteProfessor).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(professorService, 'deleteProfessor')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorService.deleteProfessor(1)).rejects.toThrowError();
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorEntity } from '../../professor/entity/professor.entity';
import { ProfessorService } from '../../professor/professor.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateProfessorDto } from '../../professor/dto/create-professor.dto';
import { UpdateProfessorDto } from '../../professor/dto/update-professor.dto';

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

const updatedProfessor: ProfessorEntity = new ProfessorEntity({
  nome: 'professor 4',
  descricao: 'professor de calculo 3',
  lattes: 'link-lattes 4.5',
});

describe('ProfessorService', (): void => {
  let professorService: ProfessorService;
  let professorRepository: Repository<ProfessorEntity>;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfessorService,
        {
          provide: getRepositoryToken(ProfessorEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(professorEntityList),
            findOneBy: jest.fn().mockResolvedValue(professorEntityList[0]),
            create: jest.fn().mockReturnValue(professorEntityList[0]),
            save: jest.fn().mockResolvedValue(professorEntityList[0]),
            update: jest.fn().mockResolvedValue(updatedProfessor),
            delete: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    professorService = module.get<ProfessorService>(ProfessorService);
    professorRepository = module.get<Repository<ProfessorEntity>>(
      getRepositoryToken(ProfessorEntity),
    );
  });

  it('should be defined', (): void => {
    expect(professorService).toBeDefined();
    expect(professorRepository).toBeDefined();
  });

  describe('getProfessores', (): void => {
    it('should return an array of professores successfully', async (): Promise<void> => {
      // Act
      const result: ProfessorEntity[] = await professorService.getProfessores();

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(professorEntityList);
      expect(result).toBeInstanceOf(Array<ProfessorEntity>);
      expect(professorRepository.find).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(professorRepository, 'find')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorRepository.find()).rejects.toThrowError();
    });
  });

  describe('getProfessorPorId', (): void => {
    it('should return a professor successfully', async (): Promise<void> => {
      // Act
      const result: ProfessorEntity =
        await professorService.getProfessorPorId(1);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(professorEntityList[0]);
      expect(result).toBeInstanceOf(ProfessorEntity);
      expect(professorRepository.findOneBy).toHaveBeenCalledTimes(1);
      expect(professorRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(professorRepository, 'findOneBy')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorRepository.findOneBy({ id: 1 })).rejects.toThrowError();
    });
  });

  describe('createProfessor', (): void => {
    it('should create a new professor successfully and return it', async (): Promise<void> => {
      // Arrange
      const data: CreateProfessorDto = {
        nome: 'professor 4',
        descricao: 'professor de calculo 2',
        lattes: 'link-lattes 4',
      };

      // Act
      const result: ProfessorEntity =
        await professorService.createProfessor(data);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(professorEntityList[0]);
      expect(result).toBeInstanceOf(ProfessorEntity);
      expect(professorRepository.create).toHaveBeenCalledTimes(1);
      expect(professorRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const data: CreateProfessorDto = {
        nome: 'professor 4',
        descricao: 'professor de calculo 2',
        lattes: 'link-lattes 4',
      };

      jest
        .spyOn(professorRepository, 'save')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorService.createProfessor(data)).rejects.toThrowError();
    });
  });

  describe('updateProfessor', (): void => {
    it('should update a professor successfully and return it', async (): Promise<void> => {
      // Arrange
      const data: UpdateProfessorDto = {
        id: 4,
        nome: 'professor 4',
        descricao: 'professor de calculo 3',
        lattes: 'link-lattes 4.5',
      };

      // Act
      const result: UpdateResult = await professorService.updateProfessor(data);

      // Assert
      expect(result).toBeDefined();
      expect(result).toEqual(updatedProfessor);
      expect(result).toBeInstanceOf(ProfessorEntity);
      expect(professorRepository.update).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const data: UpdateProfessorDto = {
        id: 4,
        nome: 'professor 4',
        descricao: 'professor de calculo 3',
        lattes: 'link-lattes 4.5',
      };

      jest
        .spyOn(professorRepository, 'update')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorService.updateProfessor(data)).rejects.toThrowError();
    });
  });

  describe('deleteProfessor', (): void => {
    it('should delete a professor successfully', async (): Promise<void> => {
      // Act
      const result: DeleteResult = await professorService.deleteProfessor(1);

      // Assert
      expect(result).toBeUndefined();
      expect(professorRepository.delete).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(professorRepository, 'delete')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(professorService.deleteProfessor(1)).rejects.toThrowError();
    });
  });
});

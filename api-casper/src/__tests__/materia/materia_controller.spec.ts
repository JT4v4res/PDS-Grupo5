import { Test, TestingModule } from '@nestjs/testing';
import { MateriaController } from '../../materia/materia.controller';
import { MateriaService } from '../../materia/materia.service';
import { MateriaEntity } from '../../materia/entity/materia.entity';
import { CreateMateriaDto } from '../../materia/dto/create-materia.dto';
import { UpdateMateriaDto } from '../../materia/dto/update-materia.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

const materiaEntityList: MateriaEntity[] = [
  new MateriaEntity({
    materiaId: 1,
    codigo: 'COMP378',
    tipo: 'matematica',
    professores: null,
    avaliacoes: null,
    areasRelevantes: null,
    nome: 'calculo 1',
    descricao: 'disciplina com foco em definicao de limites e derivadas',
  }),
  new MateriaEntity({
    materiaId: 2,
    codigo: 'COMP379',
    tipo: 'programacao',
    professores: null,
    avaliacoes: null,
    areasRelevantes: null,
    nome: 'estruturas de dados',
    descricao:
      'disciplina com foco em implementacao e algoritmos de estruturas de dados',
  }),
  new MateriaEntity({
    materiaId: 3,
    codigo: 'COMP380',
    tipo: 'teoria',
    professores: null,
    avaliacoes: null,
    areasRelevantes: null,
    nome: 'compiladores',
    descricao: 'disciplina com foco na teoria dos compiladores',
  }),
];

const newMateria: MateriaEntity = new MateriaEntity({
  codigo: 'COMP381',
  tipo: 'teoria',
  nome: 'teoria da computacao',
  descricao: 'disciplina com foco na maquina de turing',
});

const updatedMateria: MateriaEntity = new MateriaEntity({
  codigo: 'COMP381',
  tipo: 'teoria',
  nome: 'teoria da computacao 2',
  descricao: 'disciplina com foco na maquina de turing e automatos',
});

describe('MateriaController', (): void => {
  let materiaController: MateriaController;
  let materiaService: MateriaService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MateriaController],
      providers: [
        {
          provide: MateriaService,
          useValue: {
            getMaterias: jest.fn().mockResolvedValue(materiaEntityList),
            getMateriaPorId: jest.fn().mockResolvedValue(materiaEntityList[0]),
            createMateria: jest.fn().mockResolvedValue(newMateria),
            updateMateria: jest.fn().mockResolvedValue(updatedMateria),
            deleteMateria: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    materiaController = module.get<MateriaController>(MateriaController);
    materiaService = module.get<MateriaService>(MateriaService);
  });

  it('should be defined', (): void => {
    expect(materiaController).toBeDefined();
    expect(materiaService).toBeDefined();
  });

  describe('getMaterias', (): void => {
    it('should return a materia list entity successfully', async (): Promise<void> => {
      // Act
      const result: MateriaEntity[] = await materiaController.getMaterias();
      // Assert
      expect(result).toEqual(materiaEntityList);
      expect(result).toBeInstanceOf(Array<MateriaEntity>);
      expect(materiaService.getMaterias).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(materiaService, 'getMaterias')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(materiaController.getMaterias()).rejects.toThrowError();
    });
  });

  describe('getMateriasPorId', (): void => {
    it('should return a specific discipline', async (): Promise<void> => {
      // Act
      const result: MateriaEntity = await materiaController.getMateriaPorId(1);

      // Assert
      expect(result).toEqual(materiaEntityList[0]);
      expect(result).toBeInstanceOf(MateriaEntity);
      expect(materiaService.getMateriaPorId).toBeCalledTimes(1);
      expect(materiaService.getMateriaPorId).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(materiaService, 'getMateriaPorId')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(materiaController.getMateriaPorId(1)).rejects.toThrowError();
    });
  });

  describe('createMateria', (): void => {
    it('should create a new materia successfully', async (): Promise<void> => {
      // Arrange
      const body: CreateMateriaDto = {
        codigo: 'COMP381',
        tipo: 'teoria',
        nome: 'teoria da computacao',
        descricao: 'disciplina com foco na maquina de turing',
      };

      // Act
      const result: MateriaEntity = await materiaController.createMateria(body);

      // Assert
      expect(result).toEqual(newMateria);
      expect(result).toBeInstanceOf(MateriaEntity);
      expect(materiaService.createMateria).toHaveBeenCalledTimes(1);
      expect(materiaService.createMateria).toHaveBeenCalledWith(body);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const body: CreateMateriaDto = {
        codigo: 'COMP381',
        tipo: 'teoria',
        nome: 'teoria da computacao',
        descricao: 'disciplina com foco na maquina de turing',
      };

      jest
        .spyOn(materiaService, 'createMateria')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(materiaController.createMateria(body)).rejects.toThrowError();
    });
  });

  describe('updateMateria', (): void => {
    it('should update a materia successfully', async (): Promise<void> => {
      // Arrange
      const body: UpdateMateriaDto = {
        materiaId: 4,
        codigo: 'COMP381',
        tipo: 'teoria',
        nome: 'teoria da computacao 2',
        descricao: 'disciplina com foco na maquina de turing e automatos',
      };

      // Act
      const result: UpdateResult = await materiaController.updateMateria(body);

      // Assert
      expect(result).toEqual(updatedMateria);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(MateriaEntity);
      expect(materiaService.updateMateria).toHaveBeenCalledTimes(1);
      expect(materiaService.updateMateria).toHaveBeenCalledWith(body);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const body: UpdateMateriaDto = {
        materiaId: 4,
        codigo: 'COMP381',
        tipo: 'teoria',
        nome: 'teoria da computacao 2',
        descricao: 'disciplina com foco na maquina de turing e automatos',
      };

      jest
        .spyOn(materiaService, 'updateMateria')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(materiaController.updateMateria(body)).rejects.toThrowError();
    });
  });

  describe('deleteMateria', (): void => {
    it('should delete a materia successfully', async (): Promise<void> => {
      // Act
      const result: DeleteResult = await materiaController.deleteMateria(1);

      // Assert
      expect(result).toBeUndefined();
      expect(materiaService.deleteMateria).toHaveBeenCalledTimes(1);
      expect(materiaService.deleteMateria).toHaveBeenCalledWith(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(materiaService, 'deleteMateria')
        .mockRejectedValueOnce(new Error());

      expect(materiaService.deleteMateria(1)).rejects.toThrowError();
    });
  });
});

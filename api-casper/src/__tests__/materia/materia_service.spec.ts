import { Test, TestingModule } from '@nestjs/testing';
import { MateriaService } from '../../materia/materia.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MateriaEntity } from '../../materia/entity/materia.entity';
import { Repository } from 'typeorm';
import { CreateMateriaDto } from '../../materia/dto/create-materia.dto';
import { UpdateMateriaDto } from '../../materia/dto/update-materia.dto';

const materiaEntityList: MateriaEntity[] = [
  new MateriaEntity({
    materiaId: 1,
    codigo: 'COMP378',
    tipo: 'matematica',
    usuarios: null,
    professores: null,
    avaliacoes: null,
    areasAtuacao: null,
    nome: 'calculo 1',
    descricao: 'disciplina com foco em definicao de limites e derivadas',
  }),
  new MateriaEntity({
    materiaId: 2,
    codigo: 'COMP379',
    tipo: 'programacao',
    usuarios: null,
    professores: null,
    avaliacoes: null,
    areasAtuacao: null,
    nome: 'estruturas de dados',
    descricao:
      'disciplina com foco em implementacao e algoritmos de estruturas de dados',
  }),
  new MateriaEntity({
    materiaId: 3,
    codigo: 'COMP380',
    tipo: 'teoria',
    usuarios: null,
    professores: null,
    avaliacoes: null,
    areasAtuacao: null,
    nome: 'compiladores',
    descricao: 'disciplina com foco na teoria dos compiladores',
  }),
];

const updatedMateria = new MateriaEntity({
  codigo: 'COMP381',
  tipo: 'teoria',
  nome: 'teoria da computacao 2',
  descricao: 'disciplina com foco na maquina de turing e automatos',
});

describe('MateriaService', (): void => {
  let materiaService: MateriaService;
  let materiaRepository: Repository<MateriaEntity>;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MateriaService,
        {
          provide: getRepositoryToken(MateriaEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(materiaEntityList),
            findOneBy: jest.fn(),
            create: jest.fn().mockReturnValue(materiaEntityList[0]),
            save: jest.fn().mockResolvedValue(materiaEntityList[0]),
            update: jest.fn().mockResolvedValue(updatedMateria),
            delete: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    materiaService = module.get<MateriaService>(MateriaService);
    materiaRepository = module.get<Repository<MateriaEntity>>(
      getRepositoryToken(MateriaEntity),
    );
  });

  it('should be defined', (): void => {
    expect(materiaService).toBeDefined();
    expect(materiaRepository).toBeDefined();
  });

  describe('getMaterias', (): void => {
    it('should return a Materia Entity list successfully', async (): Promise<void> => {
      // Act
      const result: MateriaEntity[] = await materiaService.getMaterias();

      // Assert
      expect(result).toEqual(materiaEntityList);
      expect(typeof result).toEqual('object');
      expect(materiaRepository.find).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest.spyOn(materiaRepository, 'find').mockRejectedValueOnce(new Error());

      // Assert
      expect(materiaRepository.find()).rejects.toThrowError();
    });
  });

  describe('createMateria', (): void => {
    it('should create a new materia successfully ', async (): Promise<void> => {
      // Arrange
      const data: CreateMateriaDto = {
        codigo: 'COMP381',
        tipo: 'teoria',
        nome: 'teoria da computacao',
        descricao: 'disciplina com foco na maquina de turing',
      };

      // Act
      const result: MateriaEntity = await materiaService.createMateria(data);

      // Assert
      expect(result).toEqual(materiaEntityList[0]);
      expect(materiaRepository.create).toHaveBeenCalledTimes(1);
      expect(materiaRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const data: CreateMateriaDto = {
        codigo: 'COMP381',
        tipo: 'teoria',
        nome: 'teoria da computacao',
        descricao: 'disciplina com foco na maquina de turing',
      };

      jest.spyOn(materiaRepository, 'save').mockRejectedValueOnce(new Error());

      // Assert
      expect(materiaService.createMateria(data)).rejects.toThrowError();
    });
  });

  describe('updateMateria', (): void => {
    it('should update a materia successfully', async (): Promise<void> => {
      // Arrange
      const data: UpdateMateriaDto = {
        materiaId: 4,
        codigo: 'COMP381',
        tipo: 'teoria',
        nome: 'teoria da computacao 2',
        descricao: 'disciplina com foco na maquina de turing e automatos',
      };
      // Act
      const result = await materiaService.updateMateria(data);

      // Arrange
      expect(result).toEqual(updatedMateria);
      expect(materiaRepository.update).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      const data: UpdateMateriaDto = {
        materiaId: 4,
        codigo: 'COMP381',
        tipo: 'teoria',
        nome: 'teoria da computacao 2',
        descricao: 'disciplina com foco na maquina de turing e automatos',
      };

      jest
        .spyOn(materiaRepository, 'update')
        .mockRejectedValueOnce(new Error());

      // Assert
      expect(materiaService.updateMateria(data)).rejects.toThrowError();
    });
  });

  describe('deleteMateria', (): void => {
    it('should delete a materia successfully', async (): Promise<void> => {
      // Act
      const result = await materiaService.deleteMateria(1);

      // Assert
      expect(result).toBeUndefined();
      expect(materiaRepository.delete).toBeCalledTimes(1);
    });

    it('should throw an exception', (): void => {
      // Arrange
      jest
        .spyOn(materiaRepository, 'delete')
        .mockRejectedValueOnce(new Error());

      expect(materiaService.deleteMateria(1)).rejects.toThrowError();
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PerfilacademicoController } from '../../perfilacademico/perfilacademico.controller';
import { PerfilacademicoService } from '../../perfilacademico/perfilacademico.service';
import { PerfilacademicoEntity } from '../../perfilacademico/entities/perfilacademico.entity';

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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilacademicoController],
      providers: [{
        provide: PerfilacademicoService,
        useValue:{
          createPerfil: jest.fn().mockResolvedValue(newPerfilacademico),
          getPerfis: jest.fn().mockResolvedValue(perfilacademicoList),
          getPerfilById: jest.fn().mockResolvedValue(perfilacademicoList[0]),
          updatePerfil: jest.fn().mockResolvedValue(updatedPerfilAcademico),
          attPontuacao: jest.fn().mockResolvedValue(1),
          deletePerfil: jest.fn().mockResolvedValue(null),
        }
      }],
    }).compile();

    perfilAcademicocontroller = module.get<PerfilacademicoController>(PerfilacademicoController);
  });

  it('should be defined', () => {
    expect(perfilAcademicocontroller).toBeDefined();
  });
});

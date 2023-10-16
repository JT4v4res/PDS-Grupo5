import { Test, TestingModule } from '@nestjs/testing';
import { PerfilacademicoService } from '../../perfilacademico/perfilacademico.service';
import { PerfilacademicoEntity } from 'src/perfilacademico/entities/perfilacademico.entity';

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

describe('PerfilacademicoService', () => {
  let service: PerfilacademicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfilacademicoService],
    }).compile();

    service = module.get<PerfilacademicoService>(PerfilacademicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

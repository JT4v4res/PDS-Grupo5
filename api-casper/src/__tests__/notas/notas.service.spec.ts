import { Test, TestingModule } from '@nestjs/testing';
import { NotasService } from '../../notas/notas.service';
import { NotaEntity } from 'src/notas/entities/nota.entity';

const NotasEntityList: NotaEntity[] = [
  new NotaEntity({
    notaId: 1,
    matricula: '10018299',
    materia: 'Estruturas de Dados',
    ab1: 8,
    ab2: 8,
    reav: null,
    final: 8,
  }),
  new NotaEntity({
    notaId: 2,
    matricula: '10018293',
    materia: 'Programação 1',
    ab1: 5,
    ab2: 3,
    reav: 4,
    final: 4.5,
  }),
  new NotaEntity({
    notaId: 3,
    matricula: '10018296',
    materia: 'Ciência de Dados',
    ab1: 10,
    ab2: 9,
    reav: 10,
    final: 10,
  }),
  new NotaEntity({
    notaId: 4,
    matricula: '10018295',
    materia: 'Cálculo 1',
    ab1: 2,
    ab2: 7,
    reav: 8,
    final: 7.5,
  }),
];

const newNota: NotaEntity = new NotaEntity({
  matricula: '10013295',
  materia: 'Calculo 2',
  ab1: 3,
});

const updatedNota: NotaEntity = new NotaEntity({
  matricula: '10013295',
  materia: 'Calculo 2',
  ab1: 5,
});
describe('NotasService', () => {
  let service: NotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotasService],
    }).compile();

    service = module.get<NotasService>(NotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

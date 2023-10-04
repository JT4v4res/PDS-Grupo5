import { Test, TestingModule } from '@nestjs/testing';
import { PerfilacademicoService } from './perfilacademico.service';

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

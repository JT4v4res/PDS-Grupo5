import { Test, TestingModule } from '@nestjs/testing';
import { PerfilacademicoController } from './perfilacademico.controller';
import { PerfilacademicoService } from './perfilacademico.service';

describe('PerfilacademicoController', () => {
  let controller: PerfilacademicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilacademicoController],
      providers: [PerfilacademicoService],
    }).compile();

    controller = module.get<PerfilacademicoController>(PerfilacademicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TipoSangreController } from './tipo_sangre.controller';

describe('TipoSangreController', () => {
  let controller: TipoSangreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoSangreController],
    }).compile();

    controller = module.get<TipoSangreController>(TipoSangreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

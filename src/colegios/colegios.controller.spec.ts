import { Test, TestingModule } from '@nestjs/testing';
import { ColegiosController } from './colegios.controller';

describe('ColegiosController', () => {
  let controller: ColegiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColegiosController],
    }).compile();

    controller = module.get<ColegiosController>(ColegiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

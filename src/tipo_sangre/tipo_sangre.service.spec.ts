import { Test, TestingModule } from '@nestjs/testing';
import { TipoSangreService } from './tipo_sangre.service';

describe('TipoSangreService', () => {
  let service: TipoSangreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoSangreService],
    }).compile();

    service = module.get<TipoSangreService>(TipoSangreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

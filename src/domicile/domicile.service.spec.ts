import { Test, TestingModule } from '@nestjs/testing';
import { DomicileService } from './domicile.service';

describe('DomicileService', () => {
  let service: DomicileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomicileService],
    }).compile();

    service = module.get<DomicileService>(DomicileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

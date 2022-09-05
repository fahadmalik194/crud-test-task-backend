import { Test, TestingModule } from '@nestjs/testing';
import { DomicileController } from './domicile.controller';

describe('DomicileController', () => {
  let controller: DomicileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DomicileController],
    }).compile();

    controller = module.get<DomicileController>(DomicileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BioDataController } from './bio-data.controller';

describe('BioDataController', () => {
  let controller: BioDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BioDataController],
    }).compile();

    controller = module.get<BioDataController>(BioDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

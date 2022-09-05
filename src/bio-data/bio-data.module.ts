import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BioDataController } from './bio-data.controller';
import { BioData } from './bio-data.model';
import { BioDataService } from './bio-data.service';

@Module({
  imports: [SequelizeModule.forFeature([BioData])],
  controllers: [BioDataController],
  providers: [BioDataService],
})
export class BioDataModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DomicileController } from './domicile.controller';
import { Domicile } from './domicile.model';
import { DomicileService } from './domicile.service';

@Module({
  imports: [SequelizeModule.forFeature([Domicile])],
  controllers: [DomicileController],
  providers: [DomicileService],
})
export class DomicileModule {}

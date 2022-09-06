import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UtilsController } from './utils.controller';
import { UtilsService } from './utils.service';

@Module({
  controllers: [UtilsController],
  providers: [UtilsService, ConfigModule],
})
export class UtilsModule {}

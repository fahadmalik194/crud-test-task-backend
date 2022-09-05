import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DomicileDto } from './domicile.dto';
import { Domicile } from './domicile.model';
import { DomicileService } from './domicile.service';

@ApiTags('domicile')
@Controller('domicile')
export class DomicileController {
  constructor(private domicileService: DomicileService) {}

  @Post('create')
  create(@Body() domicile: DomicileDto): Promise<Domicile> {
    return this.domicileService.create(domicile);
  }

  @HttpCode(HttpStatus.OK)
  @Post('read/all/data')
  getAll() {
    return this.domicileService.getAllData();
  }
}

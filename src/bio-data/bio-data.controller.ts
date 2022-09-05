import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';
import { User } from '../user/user.model';
import { JwtGaurd } from '../auth/gaurd/jwt.gaurd';
import { BioDataDto } from './bio-data.dto';
import { BioData } from './bio-data.model';
import { BioDataService } from './bio-data.service';

@ApiTags('bioData')
@Controller('bioData')
export class BioDataController {
  constructor(private bioDataService: BioDataService) {}

  @Post('create')
  create(@Body() bioData: BioDataDto): Promise<BioData> {
    return this.bioDataService.create(bioData);
  }

  @HttpCode(HttpStatus.OK)
  @Post('read/:id')
  @ApiParam({ name: 'id' })
  get(@Param() param): Promise<BioData> {
    return this.bioDataService.get(param.id);
  }

  @UseGuards(JwtGaurd)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Post('read/all/data')
  getAll(@GetUser() user: User) {
    console.log('User Details', user);
    return this.bioDataService.getAllData();
  }

  @HttpCode(HttpStatus.OK)
  @Post('update/:id')
  @ApiParam({ name: 'id' })
  @ApiBody({})
  update(@Param() param, @Body() updateObj) {
    return this.bioDataService.update(param.id, updateObj);
  }

  @HttpCode(HttpStatus.OK)
  @Post('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param() param) {
    return this.bioDataService.delete(param.id);
  }
}

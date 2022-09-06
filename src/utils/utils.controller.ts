import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { UtilsService } from './utils.service';

@ApiTags('utils')
@Controller('utils')
export class UtilsController {
  constructor(private utilService: UtilsService) {}

  @HttpCode(HttpStatus.OK)
  @Post('uploadFile')
  @UseInterceptors(FileInterceptor('uploadedImage'))
  uploadFile(@UploadedFile() fileObj: Express.Multer.File) {
    return this.utilService.uploadImageOnS3(fileObj);
  }
}

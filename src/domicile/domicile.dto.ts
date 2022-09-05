import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DomicileDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
}

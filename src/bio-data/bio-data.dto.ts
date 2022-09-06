import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BioDataDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fatherName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cnic: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  domicile: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  creatorId: string;
}

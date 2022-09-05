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
  @IsNumber()
  @IsNotEmpty()
  cnic: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  domicile: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  creatorId: string;
}

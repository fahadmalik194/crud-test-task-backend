import { ApiProperty } from '@nestjs/swagger';
import { long } from 'aws-sdk/clients/cloudfront';
import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class BioData extends Model {
  @Column
  @ApiProperty()
  name: string;

  @Column
  @ApiProperty()
  fatherName: string;

  @Column
  @ApiProperty()
  cnic: string;

  @Column
  @ApiProperty()
  domicile: string;

  @Column
  @ApiProperty()
  image: string;

  @Column
  @ApiProperty()
  creatorId: number;
}

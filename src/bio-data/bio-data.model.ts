import { ApiProperty } from '@nestjs/swagger';
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
  cnic: number;

  @Column
  @ApiProperty()
  domicile: string;

  @Column
  @ApiProperty()
  image: string;

  @Column
  @ApiProperty()
  creatorId: string;
}

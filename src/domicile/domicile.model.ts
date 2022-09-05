import { ApiProperty } from '@nestjs/swagger';
import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Domicile extends Model {
  @Column
  @ApiProperty()
  title: string;
}

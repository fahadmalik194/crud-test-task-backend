import { ApiProperty } from '@nestjs/swagger';
import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  @ApiProperty()
  username: string;

  @Column
  @ApiProperty()
  password: string;

  @Column({ defaultValue: false })
  @ApiProperty()
  isAdmin: boolean;
}

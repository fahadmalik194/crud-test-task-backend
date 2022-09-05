import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Domicile } from './domicile.model';

@Injectable()
export class DomicileService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(Domicile) private domicileModel: typeof Domicile,
  ) {}

  async create(domicile) {
    try {
      return await this.domicileModel.create(domicile);
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }

  async getAllData() {
    try {
      return await this.domicileModel.findAll();
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }
}

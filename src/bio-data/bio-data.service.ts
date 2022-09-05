import { ConsoleLogger, ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { BioData } from './bio-data.model';

@Injectable()
export class BioDataService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(BioData) private bioDataModel: typeof BioData,
  ) {}

  async create(bioData) {
    try {
      return await this.bioDataModel.create(bioData);
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }

  async get(id): Promise<BioData> {
    try {
      return await this.bioDataModel.findOne({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }

  async getAllData() {
    try {
      return await this.bioDataModel.findAll();
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }

  async update(id, updateObj) {
    try {
      return await this.bioDataModel.update(updateObj, { where: { id } });
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }

  async delete(id) {
    try {
      const bioData = await this.bioDataModel.findOne(id);
      return await bioData.destroy();
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }
}

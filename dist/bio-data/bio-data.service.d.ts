import { Sequelize } from 'sequelize-typescript';
import { BioData } from './bio-data.model';
export declare class BioDataService {
    private sequelize;
    private bioDataModel;
    constructor(sequelize: Sequelize, bioDataModel: typeof BioData);
    create(bioData: any): Promise<BioData>;
    get(id: any): Promise<BioData>;
    getAllData(): Promise<BioData[]>;
    update(id: any, updateObj: any): Promise<[affectedCount: number]>;
    delete(id: any): Promise<void>;
}

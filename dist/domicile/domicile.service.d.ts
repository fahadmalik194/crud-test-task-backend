import { Sequelize } from 'sequelize-typescript';
import { Domicile } from './domicile.model';
export declare class DomicileService {
    private sequelize;
    private domicileModel;
    constructor(sequelize: Sequelize, domicileModel: typeof Domicile);
    create(domicile: any): Promise<Domicile>;
    getAllData(): Promise<Domicile[]>;
}

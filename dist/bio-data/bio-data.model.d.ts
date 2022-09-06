import { Model } from 'sequelize-typescript';
export declare class BioData extends Model {
    name: string;
    fatherName: string;
    cnic: string;
    domicile: string;
    image: string;
    creatorId: number;
}

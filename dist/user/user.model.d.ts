import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    username: string;
    password: string;
    isAdmin: boolean;
}

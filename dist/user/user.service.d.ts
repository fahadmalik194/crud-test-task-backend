import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';
import { UserDto } from './user.dto';
export declare class UserService {
    private sequelize;
    private userModel;
    constructor(sequelize: Sequelize, userModel: typeof User);
    create(user: UserDto): Promise<User>;
}

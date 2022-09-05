import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';
import * as argon from 'argon2';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(User) private userModel: typeof User,
  ) {}

  async create(user: UserDto) {
    try {
      const hash = await argon.hash(user.password);
      console.log('Hash', hash);
      const saveUser = await this.userModel.create({
        username: user.username,
        password: hash,
        isAdmin: user.isAdmin,
      });
      delete saveUser.password;
      return saveUser;
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }
}

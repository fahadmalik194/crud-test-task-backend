import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { AuthDto } from './auth.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
    @InjectModel(User) private userModel: typeof User,
    private jwt: JwtService,
  ) {}

  async signIn(dto: AuthDto) {
    const user = await this.userModel.findOne({
      where: {
        username: dto.username,
      },
    });
    if (!user) throw new ForbiddenException('Credentials Incorrect');

    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) throw new ForbiddenException('Credentials Incorrect');

    user['password'] = null;
    return this.signToken(user);
  }

  async signToken(user): Promise<{ access_token: string; user_detail }> {
    const payload = {
      sub: user.id,
      username: user.username,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
      user_detail: user,
    };
  }
}

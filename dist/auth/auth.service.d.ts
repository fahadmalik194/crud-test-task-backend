import { User } from '../user/user.model';
import { AuthDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private config;
    private userModel;
    private jwt;
    constructor(config: ConfigService, userModel: typeof User, jwt: JwtService);
    signIn(dto: AuthDto): Promise<{
        access_token: string;
        user_detail: any;
    }>;
    signToken(user: any): Promise<{
        access_token: string;
        user_detail: any;
    }>;
}

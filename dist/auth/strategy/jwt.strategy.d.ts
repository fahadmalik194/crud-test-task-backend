import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { User } from '../../user/user.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userModel;
    constructor(config: ConfigService, userModel: typeof User);
    validate(payload: {
        sub: number;
        username: string;
    }): Promise<User>;
}
export {};

import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(dto: AuthDto): Promise<{
        access_token: string;
        user_detail: any;
    }>;
}

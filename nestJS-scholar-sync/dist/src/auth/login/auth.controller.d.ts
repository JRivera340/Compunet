import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userLoginDto: UserLoginDto): Promise<{
        access_token: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
}

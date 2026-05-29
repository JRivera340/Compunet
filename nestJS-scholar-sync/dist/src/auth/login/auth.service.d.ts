import { JwtService } from '@nestjs/jwt';
import { UserService } from "../user/user.service";
import { UserLoginDto } from './dto/user-login.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(userLoginDto: UserLoginDto): Promise<{
        access_token: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
}

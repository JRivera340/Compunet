import { MessageResponse } from "../../common/dto/message-response.type";
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthPayload } from './dto/auth-payload.type';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(input: UserLoginDto): Promise<AuthPayload>;
    logout(): Promise<MessageResponse>;
}

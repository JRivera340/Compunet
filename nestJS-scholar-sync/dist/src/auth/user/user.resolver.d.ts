import { MessageResponse } from "../../common/dto/message-response.type";
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
    user(id: number): Promise<User>;
    createUser(input: CreateUserDto): Promise<User>;
    updateUser(id: number, input: UpdateUserDto, currentUser: User): Promise<User>;
    removeUser(id: number, currentUser: User): Promise<MessageResponse>;
}

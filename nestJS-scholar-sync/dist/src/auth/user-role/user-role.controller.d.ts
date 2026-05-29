import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
export declare class UserRoleController {
    private readonly userRoleService;
    constructor(userRoleService: UserRoleService);
    create(createUserRoleDto: CreateUserRoleDto): Promise<import("./entities/user-role.entity").UserRole>;
    findAll(): Promise<import("./entities/user-role.entity").UserRole[]>;
    findOne(id: number): Promise<import("./entities/user-role.entity").UserRole>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

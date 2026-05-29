import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { Role } from '../role/entities/role.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserRole } from './entities/user-role.entity';
export declare class UserRoleService {
    private readonly userRoleRepository;
    private readonly userRepository;
    private readonly roleRepository;
    constructor(userRoleRepository: Repository<UserRole>, userRepository: Repository<User>, roleRepository: Repository<Role>);
    create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole>;
    findAll(): Promise<UserRole[]>;
    findOne(id: number): Promise<UserRole>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

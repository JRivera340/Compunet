import { Repository } from 'typeorm';
import { UserBadgeService } from "../../badge/user-badge/user-badge.service";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly userBadgeService;
    constructor(userRepository: Repository<User>, userBadgeService: UserBadgeService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<any>;
    findAllFull(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByEmailWithRoles(email: string): Promise<User | null>;
    addXp(userId: number, amount: number): Promise<User>;
}

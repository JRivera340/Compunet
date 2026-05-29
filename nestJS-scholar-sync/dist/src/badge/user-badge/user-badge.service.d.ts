import { Repository } from 'typeorm';
import { UserBadge } from './entities/user-badge.entity';
import { CreateUserBadgeDto } from './dto/create-user-badge.dto';
import { UpdateUserBadgeDto } from './dto/update-user-badge.dto';
import { User } from "../../auth/user/entities/user.entity";
import { ExperienceBadge } from "../experience-badge/entities/experience-badge.entity";
export declare class UserBadgeService {
    private readonly userBadgeRepository;
    private readonly userRepository;
    private readonly experienceBadgeRepository;
    constructor(userBadgeRepository: Repository<UserBadge>, userRepository: Repository<User>, experienceBadgeRepository: Repository<ExperienceBadge>);
    create(createUserBadgeDto: CreateUserBadgeDto): Promise<UserBadge>;
    findAll(): Promise<UserBadge[]>;
    findOne(id: number): Promise<UserBadge>;
    update(id: number, updateUserBadgeDto: UpdateUserBadgeDto): Promise<UserBadge>;
    remove(id: number): Promise<void>;
    checkAndAwardBadges(userId: number, level: number): Promise<void>;
}

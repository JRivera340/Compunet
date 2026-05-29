import { UserBadgeService } from './user-badge.service';
import { CreateUserBadgeDto } from './dto/create-user-badge.dto';
import { UpdateUserBadgeDto } from './dto/update-user-badge.dto';
export declare class UserBadgeController {
    private readonly userBadgeService;
    constructor(userBadgeService: UserBadgeService);
    create(createUserBadgeDto: CreateUserBadgeDto): Promise<import("./entities/user-badge.entity").UserBadge>;
    findAll(): Promise<import("./entities/user-badge.entity").UserBadge[]>;
    findOne(id: number): Promise<import("./entities/user-badge.entity").UserBadge>;
    update(id: number, updateUserBadgeDto: UpdateUserBadgeDto): Promise<import("./entities/user-badge.entity").UserBadge>;
    remove(id: number): Promise<void>;
}

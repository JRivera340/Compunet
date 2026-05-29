import { ExperienceBadgeService } from './experience-badge.service';
import { CreateExperienceBadgeDto } from './dto/create-experience-badge.dto';
import { UpdateExperienceBadgeDto } from './dto/update-experience-badge.dto';
export declare class ExperienceBadgeController {
    private readonly experienceBadgeService;
    constructor(experienceBadgeService: ExperienceBadgeService);
    create(createExperienceBadgeDto: CreateExperienceBadgeDto): Promise<import("./entities/experience-badge.entity").ExperienceBadge>;
    findAll(): Promise<import("./entities/experience-badge.entity").ExperienceBadge[]>;
    findOne(id: number): Promise<import("./entities/experience-badge.entity").ExperienceBadge>;
    update(id: number, updateExperienceBadgeDto: UpdateExperienceBadgeDto): Promise<import("./entities/experience-badge.entity").ExperienceBadge>;
    remove(id: number): Promise<void>;
}

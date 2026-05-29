import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ExperienceBadge } from './entities/experience-badge.entity';
import { CreateExperienceBadgeDto } from './dto/create-experience-badge.dto';
import { UpdateExperienceBadgeDto } from './dto/update-experience-badge.dto';
export declare class ExperienceBadgeService implements OnModuleInit {
    private readonly badgeRepository;
    constructor(badgeRepository: Repository<ExperienceBadge>);
    onModuleInit(): Promise<void>;
    create(createExperienceBadgeDto: CreateExperienceBadgeDto): Promise<ExperienceBadge>;
    findAll(): Promise<ExperienceBadge[]>;
    findOne(id: number): Promise<ExperienceBadge>;
    update(id: number, updateExperienceBadgeDto: UpdateExperienceBadgeDto): Promise<ExperienceBadge>;
    remove(id: number): Promise<void>;
    seedInitialBadges(): Promise<void>;
}

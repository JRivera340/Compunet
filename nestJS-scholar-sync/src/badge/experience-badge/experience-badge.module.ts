import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExperienceBadgeService } from './experience-badge.service';
import { ExperienceBadge } from './entities/experience-badge.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ExperienceBadge])],
    providers: [ExperienceBadgeService],
    exports: [ExperienceBadgeService],
})
export class ExperienceBadgeModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SupplementarySessionsService } from './supplementary-sessions.service';
import { SupplementarySession } from './entities/supplementary-session.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SupplementarySession])],
    providers: [SupplementarySessionsService],
})
export class SupplementarySessionsModule {}

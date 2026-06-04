import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserBadgeModule } from 'src/badge/user-badge/user-badge.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User]), UserBadgeModule],
    providers: [UserService, UserResolver],
    exports: [UserService],
})
export class UserModule {}

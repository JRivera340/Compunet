import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../user/entities/user.entity';
import { Role } from '../role/entities/role.entity';

import { UserRoleService } from './user-role.service';
import { UserRole } from './entities/user-role.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserRole, User, Role])],
    providers: [UserRoleService],
    exports: [UserRoleService],
})
export class UserRoleModule {}

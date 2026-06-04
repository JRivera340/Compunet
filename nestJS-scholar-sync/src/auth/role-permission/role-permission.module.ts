import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Role } from '../role/entities/role.entity';
import { Permission } from '../permission/entities/permission.entity';

import { RolePermissionService } from './role-permission.service';
import { RolePermission } from './entities/role-permission.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RolePermission, Role, Permission])],
    providers: [RolePermissionService],
    exports: [RolePermissionService],
})
export class RolePermissionModule {}

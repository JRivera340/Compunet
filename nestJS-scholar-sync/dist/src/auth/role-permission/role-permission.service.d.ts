import { CreateRolePermissionDto } from './dto/create-role-permission.dto';
import { Repository } from 'typeorm';
import { Role } from '../role/entities/role.entity';
import { Permission } from '../permission/entities/permission.entity';
import { RolePermission } from './entities/role-permission.entity';
export declare class RolePermissionService {
    private readonly rolePermissionRepository;
    private readonly roleRepository;
    private readonly permissionRepository;
    constructor(rolePermissionRepository: Repository<RolePermission>, roleRepository: Repository<Role>, permissionRepository: Repository<Permission>);
    create(createRolePermissionDto: CreateRolePermissionDto): Promise<RolePermission>;
    findAll(): Promise<RolePermission[]>;
    findOne(id: number): Promise<RolePermission>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

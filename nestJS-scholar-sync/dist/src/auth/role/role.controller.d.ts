import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<import("./entities/role.entity").Role>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<import("./entities/role.entity").Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<import("./entities/role.entity").Role>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

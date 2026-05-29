import { RolePermission } from "../../role-permission/entities/role-permission.entity";
import { UserRole } from "../../user-role/entities/user-role.entity";
import { RoleNames } from '../dto/create-role.dto';
export declare class Role {
    id: number;
    name: RoleNames;
    description?: string;
    rolesPermissions: RolePermission[];
    usersRoles: UserRole[];
}

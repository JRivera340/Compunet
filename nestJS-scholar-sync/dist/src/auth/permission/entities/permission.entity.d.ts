import { RolePermission } from "../../role-permission/entities/role-permission.entity";
export declare class Permission {
    id: number;
    name: string;
    description?: string;
    rolesPermissions: RolePermission[];
}

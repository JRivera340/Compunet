import { User } from "../../user/entities/user.entity";
import { Role } from "../../role/entities/role.entity";
export declare class UserRole {
    id: number;
    user: User;
    role: Role;
}

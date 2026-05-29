export declare enum RoleNames {
    ADMIN = "Admin",
    STUDENT = "Student",
    TA = "TA",
    PROFESSOR = "Professor"
}
export declare class CreateRoleDto {
    name: RoleNames;
    description?: string;
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { RolePermission } from 'src/auth/role-permission/entities/role-permission.entity';

@Entity('permissions')
export class Permission {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name!: string;

    @Column({ nullable: true, length: 50 })
    description?: string;

    @OneToMany(() => RolePermission, (rolePermission) => rolePermission.permission)
    rolesPermissions!: RolePermission[];
}

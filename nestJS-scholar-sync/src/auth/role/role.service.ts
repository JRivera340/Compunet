import { ConflictException, Injectable } from '@nestjs/common';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) {}

    async create(createRoleDto: CreateRoleDto): Promise<Role> {
        const roleExists = await this.roleRepository.findOne({
            where: { name: createRoleDto.name },
        });
        if (roleExists) {
            throw new ConflictException('Role with this name already exists');
        }
        const role = this.roleRepository.create(createRoleDto);
        return this.roleRepository.save(role);
    }

    async findAll(): Promise<any> {
        const roles = await this.roleRepository.find({
            relations: ['rolesPermissions', 'rolesPermissions.permission'],
        });

        return roles.map((role) => ({
            id: role.id,
            name: role.name,
            description: role.description,
            permissions: role.rolesPermissions.map((rp) => ({
                id: rp.permission.id,
                name: rp.permission.name,
            })),
        }));
    }

    async findOne(id: number): Promise<Role> {
        const role = await this.roleRepository.findOne({
            where: { id },
            relations: ['rolesPermissions', 'rolesPermissions.permission', 'usersRoles'],
        });
        if (!role) {
            throw new ConflictException('Role not found');
        }
        return role;
    }

    async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
        const role = await this.findOne(id);
        Object.assign(role, updateRoleDto);
        return this.roleRepository.save(role);
    }

    async remove(id: number): Promise<{ message: string }> {
        const role = await this.findOne(id);
        await this.roleRepository.remove(role);
        return { message: `Role with ID ${id} has been removed` };
    }
}

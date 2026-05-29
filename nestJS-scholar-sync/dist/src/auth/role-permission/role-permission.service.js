"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const role_entity_1 = require("../role/entities/role.entity");
const permission_entity_1 = require("../permission/entities/permission.entity");
const role_permission_entity_1 = require("./entities/role-permission.entity");
let RolePermissionService = class RolePermissionService {
    rolePermissionRepository;
    roleRepository;
    permissionRepository;
    constructor(rolePermissionRepository, roleRepository, permissionRepository) {
        this.rolePermissionRepository = rolePermissionRepository;
        this.roleRepository = roleRepository;
        this.permissionRepository = permissionRepository;
    }
    async create(createRolePermissionDto) {
        const role = await this.roleRepository.findOne({
            where: { id: createRolePermissionDto.roleId },
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role with id ${createRolePermissionDto.roleId} not found`);
        }
        const permission = await this.permissionRepository.findOne({
            where: { id: createRolePermissionDto.permissionId },
        });
        if (!permission) {
            throw new common_1.NotFoundException(`Permission with id ${createRolePermissionDto.permissionId} not found`);
        }
        const existing = await this.rolePermissionRepository.findOne({
            where: { role: { id: role.id }, permission: { id: permission.id } },
        });
        if (existing) {
            throw new common_1.ConflictException(`Role permission with role id ${createRolePermissionDto.roleId} and permission id ${createRolePermissionDto.permissionId} already exists`);
        }
        const rolePermission = this.rolePermissionRepository.create({
            role,
            permission,
        });
        return this.rolePermissionRepository.save(rolePermission);
    }
    async findAll() {
        return this.rolePermissionRepository.find({ relations: ['role', 'permission'] });
    }
    async findOne(id) {
        const rolePermission = await this.rolePermissionRepository.findOne({
            where: { id },
            relations: ['role', 'permission'],
        });
        if (!rolePermission) {
            throw new common_1.NotFoundException(`Role permission with id ${id} not found`);
        }
        return rolePermission;
    }
    async remove(id) {
        const rolePermission = await this.findOne(id);
        await this.rolePermissionRepository.remove(rolePermission);
        return { message: `Role permission with id ${id} has been removed` };
    }
};
exports.RolePermissionService = RolePermissionService;
exports.RolePermissionService = RolePermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(role_permission_entity_1.RolePermission)),
    __param(1, (0, typeorm_2.InjectRepository)(role_entity_1.Role)),
    __param(2, (0, typeorm_2.InjectRepository)(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], RolePermissionService);
//# sourceMappingURL=role-permission.service.js.map
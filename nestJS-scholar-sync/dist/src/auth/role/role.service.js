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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const role_entity_1 = require("./entities/role.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let RoleService = class RoleService {
    roleRepository;
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async create(createRoleDto) {
        const roleExists = await this.roleRepository.findOne({
            where: { name: createRoleDto.name },
        });
        if (roleExists) {
            throw new common_1.ConflictException('Role with this name already exists');
        }
        const role = this.roleRepository.create(createRoleDto);
        return this.roleRepository.save(role);
    }
    async findAll() {
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
    async findOne(id) {
        const role = await this.roleRepository.findOne({
            where: { id },
            relations: ['rolesPermissions', 'rolesPermissions.permission', 'usersRoles'],
        });
        if (!role) {
            throw new common_1.ConflictException('Role not found');
        }
        return role;
    }
    async update(id, updateRoleDto) {
        const role = await this.findOne(id);
        Object.assign(role, updateRoleDto);
        return this.roleRepository.save(role);
    }
    async remove(id) {
        const role = await this.findOne(id);
        await this.roleRepository.remove(role);
        return { message: `Role with ID ${id} has been removed` };
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RoleService);
//# sourceMappingURL=role.service.js.map
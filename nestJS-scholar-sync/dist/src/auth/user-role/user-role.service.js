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
exports.UserRoleService = void 0;
const common_1 = require("@nestjs/common");
const role_entity_1 = require("../role/entities/role.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const user_role_entity_1 = require("./entities/user-role.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UserRoleService = class UserRoleService {
    userRoleRepository;
    userRepository;
    roleRepository;
    constructor(userRoleRepository, userRepository, roleRepository) {
        this.userRoleRepository = userRoleRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async create(createUserRoleDto) {
        const user = await this.userRepository.findOne({
            where: { id: createUserRoleDto.userId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${createUserRoleDto.userId} not found`);
        }
        const role = await this.roleRepository.findOne({
            where: { id: createUserRoleDto.roleId },
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role with id ${createUserRoleDto.roleId} not found`);
        }
        const existing = await this.userRoleRepository.findOne({
            where: { user: { id: user.id }, role: { id: role.id } },
        });
        if (existing) {
            throw new common_1.ConflictException(`User ${user.id} already has role ${role.id}`);
        }
        const userRole = this.userRoleRepository.create({ user, role });
        return this.userRoleRepository.save(userRole);
    }
    async findAll() {
        return this.userRoleRepository.find({ relations: ['user', 'role'] });
    }
    async findOne(id) {
        const userRole = await this.userRoleRepository.findOne({
            where: { id },
            relations: ['user', 'role'],
        });
        if (!userRole) {
            throw new common_1.NotFoundException(`User role with id ${id} not found`);
        }
        return userRole;
    }
    async remove(id) {
        const userRole = await this.findOne(id);
        await this.userRoleRepository.remove(userRole);
        return { message: `User role with id ${id} deleted successfully` };
    }
};
exports.UserRoleService = UserRoleService;
exports.UserRoleService = UserRoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_role_entity_1.UserRole)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_2.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UserRoleService);
//# sourceMappingURL=user-role.service.js.map
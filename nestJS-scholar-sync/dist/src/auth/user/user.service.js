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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = __importDefault(require("bcrypt"));
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_badge_service_1 = require("../../badge/user-badge/user-badge.service");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    userRepository;
    userBadgeService;
    constructor(userRepository, userBadgeService) {
        this.userRepository = userRepository;
        this.userBadgeService = userBadgeService;
    }
    async create(createUserDto) {
        const userExists = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        if (userExists) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const hashedPassword = await bcrypt_1.default.hash(createUserDto.password, 10);
        const user = this.userRepository.create({
            ...createUserDto,
            password: hashedPassword,
        });
        return this.userRepository.save(user);
    }
    async findAll() {
        const users = await this.userRepository.find({
            relations: ['usersRoles', 'usersRoles.role'],
        });
        return users.map((user) => ({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            roles: user.usersRoles.map((userRole) => ({
                id: userRole.role.id,
                name: userRole.role.name,
            })),
        }));
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findByEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        if (updateUserDto.email && updateUserDto.email !== user.email) {
            const userExists = await this.userRepository.findOne({
                where: { email: updateUserDto.email },
            });
            if (userExists) {
                throw new common_1.ConflictException('User with this email already exists');
            }
        }
        if (updateUserDto.password) {
            updateUserDto.password = await bcrypt_1.default.hash(updateUserDto.password, 10);
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }
    async remove(id) {
        const user = await this.findOne(id);
        await this.userRepository.remove(user);
        return { message: `User with ID ${id} removed successfully` };
    }
    async findByEmailWithRoles(email) {
        return this.userRepository.findOne({
            where: { email },
            relations: [
                'usersRoles',
                'usersRoles.role',
                'usersRoles.role.rolesPermissions',
                'usersRoles.role.rolesPermissions.permission',
            ],
        });
    }
    async addXp(userId, amount) {
        const user = await this.findOne(userId);
        user.xp += amount;
        const newLevel = Math.floor(user.xp / 100) + 1;
        if (newLevel > user.level) {
            user.level = newLevel;
            await this.userRepository.save(user);
            await this.userBadgeService.checkAndAwardBadges(userId, newLevel);
            return user;
        }
        return await this.userRepository.save(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_badge_service_1.UserBadgeService])
], UserService);
//# sourceMappingURL=user.service.js.map
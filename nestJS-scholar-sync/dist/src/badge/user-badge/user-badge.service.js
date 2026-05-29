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
exports.UserBadgeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_badge_entity_1 = require("./entities/user-badge.entity");
const user_entity_1 = require("../../auth/user/entities/user.entity");
const experience_badge_entity_1 = require("../experience-badge/entities/experience-badge.entity");
let UserBadgeService = class UserBadgeService {
    userBadgeRepository;
    userRepository;
    experienceBadgeRepository;
    constructor(userBadgeRepository, userRepository, experienceBadgeRepository) {
        this.userBadgeRepository = userBadgeRepository;
        this.userRepository = userRepository;
        this.experienceBadgeRepository = experienceBadgeRepository;
    }
    async create(createUserBadgeDto) {
        const { userId, experienceBadgeId, dateAcquired } = createUserBadgeDto;
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        const badge = await this.experienceBadgeRepository.findOne({ where: { id: experienceBadgeId } });
        if (!badge) {
            throw new common_1.NotFoundException(`Experience badge with ID ${experienceBadgeId} not found`);
        }
        const userBadge = this.userBadgeRepository.create({
            user,
            experienceBadge: badge,
            dateAcquired: dateAcquired ?? new Date(),
        });
        return await this.userBadgeRepository.save(userBadge);
    }
    async findAll() {
        return await this.userBadgeRepository.find({
            relations: ['user', 'experienceBadge'],
        });
    }
    async findOne(id) {
        const userBadge = await this.userBadgeRepository.findOne({
            where: { id },
            relations: ['user', 'experienceBadge'],
        });
        if (!userBadge) {
            throw new common_1.NotFoundException(`User-badge relationship with ID ${id} not found`);
        }
        return userBadge;
    }
    async update(id, updateUserBadgeDto) {
        const userBadge = await this.findOne(id);
        const { userId, experienceBadgeId, dateAcquired } = updateUserBadgeDto;
        if (userId) {
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (!user)
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            userBadge.user = user;
        }
        if (experienceBadgeId) {
            const badge = await this.experienceBadgeRepository.findOne({ where: { id: experienceBadgeId } });
            if (!badge)
                throw new common_1.NotFoundException(`Experience badge with ID ${experienceBadgeId} not found`);
            userBadge.experienceBadge = badge;
        }
        if (dateAcquired) {
            userBadge.dateAcquired = dateAcquired;
        }
        return await this.userBadgeRepository.save(userBadge);
    }
    async remove(id) {
        const userBadge = await this.findOne(id);
        await this.userBadgeRepository.remove(userBadge);
    }
    async checkAndAwardBadges(userId, level) {
        const qualifyingBadges = await this.experienceBadgeRepository.find({
            where: { minLevel: (0, typeorm_2.LessThanOrEqual)(level) },
        });
        const userBadges = await this.userBadgeRepository.find({
            where: { user: { id: userId } },
            relations: ['experienceBadge'],
        });
        const existingBadgeIds = userBadges.map((ub) => ub.experienceBadge.id);
        for (const badge of qualifyingBadges) {
            if (!existingBadgeIds.includes(badge.id)) {
                const newUserBadge = this.userBadgeRepository.create({
                    user: { id: userId },
                    experienceBadge: badge,
                    dateAcquired: new Date(),
                });
                await this.userBadgeRepository.save(newUserBadge);
            }
        }
    }
};
exports.UserBadgeService = UserBadgeService;
exports.UserBadgeService = UserBadgeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_badge_entity_1.UserBadge)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(experience_badge_entity_1.ExperienceBadge)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserBadgeService);
//# sourceMappingURL=user-badge.service.js.map
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
exports.ExperienceBadgeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const experience_badge_entity_1 = require("./entities/experience-badge.entity");
let ExperienceBadgeService = class ExperienceBadgeService {
    badgeRepository;
    constructor(badgeRepository) {
        this.badgeRepository = badgeRepository;
    }
    async onModuleInit() {
        await this.seedInitialBadges();
    }
    async create(createExperienceBadgeDto) {
        const badge = this.badgeRepository.create(createExperienceBadgeDto);
        return await this.badgeRepository.save(badge);
    }
    async findAll() {
        return await this.badgeRepository.find();
    }
    async findOne(id) {
        const badge = await this.badgeRepository.findOne({ where: { id } });
        if (!badge) {
            throw new common_1.NotFoundException(`Experience badge with ID ${id} not found`);
        }
        return badge;
    }
    async update(id, updateExperienceBadgeDto) {
        const badge = await this.findOne(id);
        const updatedBadge = this.badgeRepository.merge(badge, updateExperienceBadgeDto);
        return await this.badgeRepository.save(updatedBadge);
    }
    async remove(id) {
        const badge = await this.findOne(id);
        await this.badgeRepository.remove(badge);
    }
    async seedInitialBadges() {
        const badges = [
            {
                name: 'Bronze Scholar',
                minLevel: 2,
                message: 'You have started your journey!',
                associatePrices: 'Study kit access',
            },
            {
                name: 'Silver Scholar',
                minLevel: 5,
                message: 'You are getting better!',
                associatePrices: 'Exclusive Discord role',
            },
            {
                name: 'Gold Scholar',
                minLevel: 10,
                message: 'You are a true expert!',
                associatePrices: 'Certification of Merit',
            },
        ];
        for (const badgeData of badges) {
            const exists = await this.badgeRepository.findOne({ where: { name: badgeData.name } });
            if (!exists) {
                const badge = this.badgeRepository.create(badgeData);
                await this.badgeRepository.save(badge);
            }
        }
    }
};
exports.ExperienceBadgeService = ExperienceBadgeService;
exports.ExperienceBadgeService = ExperienceBadgeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(experience_badge_entity_1.ExperienceBadge)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExperienceBadgeService);
//# sourceMappingURL=experience-badge.service.js.map
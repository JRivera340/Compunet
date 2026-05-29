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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceBadge = void 0;
const typeorm_1 = require("typeorm");
const user_badge_entity_1 = require("../../user-badge/entities/user-badge.entity");
let ExperienceBadge = class ExperienceBadge {
    id;
    name;
    minLevel;
    message;
    associatePrices;
    usersBadges;
};
exports.ExperienceBadge = ExperienceBadge;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExperienceBadge.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 20 }),
    __metadata("design:type", String)
], ExperienceBadge.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'min_level', nullable: false }),
    __metadata("design:type", Number)
], ExperienceBadge.prototype, "minLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], ExperienceBadge.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'associate_prices', nullable: true, length: 100 }),
    __metadata("design:type", String)
], ExperienceBadge.prototype, "associatePrices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_badge_entity_1.UserBadge, (userBadge) => userBadge.experienceBadge),
    __metadata("design:type", Array)
], ExperienceBadge.prototype, "usersBadges", void 0);
exports.ExperienceBadge = ExperienceBadge = __decorate([
    (0, typeorm_1.Entity)('experience_badges')
], ExperienceBadge);
//# sourceMappingURL=experience-badge.entity.js.map
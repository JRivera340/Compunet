"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBadgeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_badge_service_1 = require("./user-badge.service");
const user_badge_entity_1 = require("./entities/user-badge.entity");
const user_entity_1 = require("../../auth/user/entities/user.entity");
const experience_badge_entity_1 = require("../experience-badge/entities/experience-badge.entity");
let UserBadgeModule = class UserBadgeModule {
};
exports.UserBadgeModule = UserBadgeModule;
exports.UserBadgeModule = UserBadgeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_badge_entity_1.UserBadge, user_entity_1.User, experience_badge_entity_1.ExperienceBadge])],
        providers: [user_badge_service_1.UserBadgeService],
        exports: [user_badge_service_1.UserBadgeService],
    })
], UserBadgeModule);
//# sourceMappingURL=user-badge.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceBadgeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const experience_badge_service_1 = require("./experience-badge.service");
const experience_badge_controller_1 = require("./experience-badge.controller");
const experience_badge_entity_1 = require("./entities/experience-badge.entity");
let ExperienceBadgeModule = class ExperienceBadgeModule {
};
exports.ExperienceBadgeModule = ExperienceBadgeModule;
exports.ExperienceBadgeModule = ExperienceBadgeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([experience_badge_entity_1.ExperienceBadge])],
        controllers: [experience_badge_controller_1.ExperienceBadgeController],
        providers: [experience_badge_service_1.ExperienceBadgeService],
        exports: [experience_badge_service_1.ExperienceBadgeService],
    })
], ExperienceBadgeModule);
//# sourceMappingURL=experience-badge.module.js.map
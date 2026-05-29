"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeModule = void 0;
const common_1 = require("@nestjs/common");
const experience_badge_module_1 = require("./experience-badge/experience-badge.module");
const user_badge_module_1 = require("./user-badge/user-badge.module");
let BadgeModule = class BadgeModule {
};
exports.BadgeModule = BadgeModule;
exports.BadgeModule = BadgeModule = __decorate([
    (0, common_1.Module)({
        imports: [experience_badge_module_1.ExperienceBadgeModule, user_badge_module_1.UserBadgeModule],
    })
], BadgeModule);
//# sourceMappingURL=badge.module.js.map
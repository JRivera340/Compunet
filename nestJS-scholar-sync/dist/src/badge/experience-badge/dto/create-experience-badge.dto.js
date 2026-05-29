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
exports.CreateExperienceBadgeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateExperienceBadgeDto {
    name;
    minLevel;
    message;
    associatePrices;
}
exports.CreateExperienceBadgeDto = CreateExperienceBadgeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bronze Scholar' }),
    (0, class_validator_1.IsString)({ message: 'Badge name must be a string' }),
    (0, class_validator_1.Length)(1, 20, { message: 'Badge name must be between 1 and 20 characters' }),
    __metadata("design:type", String)
], CreateExperienceBadgeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.IsInt)({ message: 'Minimum level must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'Minimum level must be a positive integer' }),
    __metadata("design:type", Number)
], CreateExperienceBadgeDto.prototype, "minLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Congrats! You reached level 5.' }),
    (0, class_validator_1.IsString)({ message: 'Message must be a string' }),
    (0, class_validator_1.Length)(1, 100, { message: 'Message must be between 1 and 100 characters' }),
    __metadata("design:type", String)
], CreateExperienceBadgeDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Premium plan discount 10%', required: false }),
    (0, class_validator_1.IsString)({ message: 'Associate prices must be a string' }),
    (0, class_validator_1.Length)(0, 100, { message: 'Associate prices must be between 0 and 100 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExperienceBadgeDto.prototype, "associatePrices", void 0);
//# sourceMappingURL=create-experience-badge.dto.js.map
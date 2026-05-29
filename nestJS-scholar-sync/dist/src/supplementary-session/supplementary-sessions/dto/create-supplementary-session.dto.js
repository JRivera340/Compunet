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
exports.CreateSupplementarySessionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSupplementarySessionDto {
    requestedDate;
    completed;
    topic;
    virtual;
}
exports.CreateSupplementarySessionDto = CreateSupplementarySessionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-05-10T14:00:00.000Z' }),
    (0, class_validator_1.IsDateString)({}, { message: 'Requested date must be a valid ISO 8601 date string' }),
    __metadata("design:type", Date)
], CreateSupplementarySessionDto.prototype, "requestedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, required: false }),
    (0, class_validator_1.IsBoolean)({ message: 'Completed must be a boolean value' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateSupplementarySessionDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Integrales y ecuaciones diferenciales' }),
    (0, class_validator_1.IsString)({ message: 'Topic must be a string' }),
    (0, class_validator_1.Length)(1, 100, { message: 'Topic must be between 1 and 100 characters' }),
    __metadata("design:type", String)
], CreateSupplementarySessionDto.prototype, "topic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)({ message: 'Virtual must be a boolean value' }),
    __metadata("design:type", Boolean)
], CreateSupplementarySessionDto.prototype, "virtual", void 0);
//# sourceMappingURL=create-supplementary-session.dto.js.map
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
exports.CreateCourseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCourseDto {
    name;
    credits;
    duration;
    startDate;
}
exports.CreateCourseDto = CreateCourseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Internet Computing III' }),
    (0, class_validator_1.IsString)({ message: 'Course name must be a string' }),
    (0, class_validator_1.Length)(1, 20, { message: 'Course name must be between 1 and 20 characters' }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, enum: [1, 2, 3, 4, 5] }),
    (0, class_validator_1.IsInt)({ message: 'Credits must be an integer' }),
    (0, class_validator_1.IsIn)([1, 2, 3, 4, 5], { message: 'Credits must be between 1 and 5' }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "credits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 16, enum: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] }),
    (0, class_validator_1.IsInt)({ message: 'Duration must be an integer' }),
    (0, class_validator_1.IsIn)([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], {
        message: 'Duration must be between 4 and 18 weeks',
    }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-08-10T00:00:00.000Z' }),
    (0, class_validator_1.IsDateString)({}, { message: 'Start date must be a valid ISO date string' }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "startDate", void 0);
//# sourceMappingURL=create-course.dto.js.map
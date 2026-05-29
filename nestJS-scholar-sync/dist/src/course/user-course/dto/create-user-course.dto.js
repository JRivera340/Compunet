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
exports.CreateUserCourseDto = exports.UserCourseRelationTypes = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var UserCourseRelationTypes;
(function (UserCourseRelationTypes) {
    UserCourseRelationTypes["STUDENT"] = "student";
    UserCourseRelationTypes["PROFESSOR"] = "professor";
    UserCourseRelationTypes["TA"] = "ta";
})(UserCourseRelationTypes || (exports.UserCourseRelationTypes = UserCourseRelationTypes = {}));
class CreateUserCourseDto {
    userId;
    courseId;
    relationType;
}
exports.CreateUserCourseDto = CreateUserCourseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)({ message: 'userId must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'userId must be a positive integer' }),
    __metadata("design:type", Number)
], CreateUserCourseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsInt)({ message: 'courseId must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'courseId must be a positive integer' }),
    __metadata("design:type", Number)
], CreateUserCourseDto.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: UserCourseRelationTypes.STUDENT, enum: UserCourseRelationTypes }),
    (0, class_validator_1.IsEnum)(UserCourseRelationTypes, {
        message: `relationType must be one of the following: ${Object.values(UserCourseRelationTypes).join(', ')}`,
    }),
    __metadata("design:type", String)
], CreateUserCourseDto.prototype, "relationType", void 0);
//# sourceMappingURL=create-user-course.dto.js.map
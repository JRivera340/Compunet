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
exports.CreateAttendanceSuppSessionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAttendanceSuppSessionDto {
    taId;
    studentId;
    supplementarySessionId;
    attendanceNotes;
    additionalHomework;
}
exports.CreateAttendanceSuppSessionDto = CreateAttendanceSuppSessionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.IsInt)({ message: 'TA ID must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'TA ID must be a positive integer' }),
    __metadata("design:type", Number)
], CreateAttendanceSuppSessionDto.prototype, "taId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 18 }),
    (0, class_validator_1.IsInt)({ message: 'Student ID must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'Student ID must be a positive integer' }),
    __metadata("design:type", Number)
], CreateAttendanceSuppSessionDto.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsInt)({ message: 'Supplementary Session ID must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'Supplementary Session ID must be a positive integer' }),
    __metadata("design:type", Number)
], CreateAttendanceSuppSessionDto.prototype, "supplementarySessionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'El estudiante presento avance parcial y dudas puntuales.' }),
    (0, class_validator_1.IsString)({ message: 'Attendance notes must be a string' }),
    (0, class_validator_1.Length)(1, 1000, { message: 'Attendance notes must be between 1 and 1000 characters' }),
    __metadata("design:type", String)
], CreateAttendanceSuppSessionDto.prototype, "attendanceNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Resolver ejercicios 5 al 10 del taller 2.', required: false }),
    (0, class_validator_1.IsString)({ message: 'Additional homework must be a string' }),
    (0, class_validator_1.Length)(0, 1000, { message: 'Additional homework must be between 0 and 1000 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAttendanceSuppSessionDto.prototype, "additionalHomework", void 0);
//# sourceMappingURL=create-attendance-supp-session.dto.js.map
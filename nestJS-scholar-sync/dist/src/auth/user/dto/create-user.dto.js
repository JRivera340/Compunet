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
exports.CreateUserDto = exports.Majors = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var Majors;
(function (Majors) {
    Majors["SE"] = "Software Engineering";
    Majors["BIO"] = "Biology";
    Majors["CHEM"] = "Chemistry";
    Majors["PHYS"] = "Physics";
    Majors["MATH"] = "Mathematics";
})(Majors || (exports.Majors = Majors = {}));
class CreateUserDto {
    email;
    password;
    firstName;
    lastName;
    profilePic;
    major1;
    major2;
    xp;
    level;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'alice@example.com', description: 'Email único del usuario' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address' }),
    (0, class_validator_1.Length)(5, 50, { message: 'Email must be between 5 and 50 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password123', description: 'Contraseña del usuario' }),
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.Length)(8, 30, { message: 'Password must be between 8 and 30 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alice', description: 'Nombre del usuario' }),
    (0, class_validator_1.IsString)({ message: 'First name must be a string' }),
    (0, class_validator_1.Length)(1, 20, { message: 'First name must be between 1 and 20 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Smith', description: 'Apellido del usuario' }),
    (0, class_validator_1.IsString)({ message: 'Last name must be a string' }),
    (0, class_validator_1.Length)(1, 20, { message: 'Last name must be between 1 and 20 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/profile.jpg', description: 'Imagen de perfil del usuario' }),
    (0, class_validator_1.IsString)({ message: 'Profile picture must be a string' }),
    (0, class_validator_1.Length)(0, 100, { message: 'Profile picture must be at most 100 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "profilePic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Computer Science', description: 'Primera carrera del usuario' }),
    (0, class_validator_1.IsString)({ message: 'Major 1 must be a string' }),
    (0, class_validator_1.IsEnum)(Majors, { message: `Major 1 must be one of the following: ${Object.values(Majors).join(', ')}` }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "major1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mathematics', description: 'Segunda carrera del usuario' }),
    (0, class_validator_1.IsString)({ message: 'Major 2 must be a string' }),
    (0, class_validator_1.IsEnum)(Majors, { message: `Major 2 must be one of the following: ${Object.values(Majors).join(', ')}` }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "major2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50, description: 'Puntos de experiencia del usuario' }),
    (0, class_validator_1.IsInt)({ message: 'XP must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'XP must be a positive integer' }),
    (0, class_validator_1.Max)(100, { message: 'XP must be less than or equal to 100' }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "xp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Nivel del usuario' }),
    (0, class_validator_1.IsInt)({ message: 'Level must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'Level must be a positive integer' }),
    (0, class_validator_1.Max)(30, { message: 'Level must be less than or equal to 30' }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "level", void 0);
//# sourceMappingURL=create-user.dto.js.map
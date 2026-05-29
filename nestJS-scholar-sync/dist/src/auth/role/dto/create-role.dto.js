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
exports.CreateRoleDto = exports.RoleNames = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var RoleNames;
(function (RoleNames) {
    RoleNames["ADMIN"] = "Admin";
    RoleNames["STUDENT"] = "Student";
    RoleNames["TA"] = "TA";
    RoleNames["PROFESSOR"] = "Professor";
})(RoleNames || (exports.RoleNames = RoleNames = {}));
class CreateRoleDto {
    name;
    description;
}
exports.CreateRoleDto = CreateRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RoleNames, example: RoleNames.ADMIN }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.IsEnum)(RoleNames, { message: `Name must be one of the following: ${Object.values(RoleNames).join(', ')}` }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Administrator role with full permissions', description: 'Description of the role' }),
    (0, class_validator_1.IsString)({ message: 'Description must be a string' }),
    (0, class_validator_1.Length)(1, 50, { message: 'Description must be between 1 and 50 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
//# sourceMappingURL=create-role.dto.js.map
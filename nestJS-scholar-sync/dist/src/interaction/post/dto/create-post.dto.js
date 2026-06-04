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
exports.CreatePostDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreatePostDto = class CreatePostDto {
    userId;
    title;
    question;
    dateAdded;
};
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsInt)({ message: 'User ID must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'User ID must be a positive integer' }),
    __metadata("design:type", Number)
], CreatePostDto.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, class_validator_1.Length)(1, 30, { message: 'Title must be between 1 and 30 characters' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: 'Question must be a string' }),
    (0, class_validator_1.Length)(1, 1000, { message: 'Question must be between 1 and 1000 characters' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "question", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    (0, class_validator_1.IsDateString)({}, { message: 'Date added must be a valid ISO date string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "dateAdded", void 0);
exports.CreatePostDto = CreatePostDto = __decorate([
    (0, graphql_1.InputType)('CreatePostInput')
], CreatePostDto);
//# sourceMappingURL=create-post.dto.js.map
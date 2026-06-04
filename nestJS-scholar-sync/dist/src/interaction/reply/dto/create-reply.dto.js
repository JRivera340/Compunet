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
exports.CreateReplyDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateReplyDto = class CreateReplyDto {
    postId;
    userId;
    replyId;
    replyMessage;
    dateAdded;
};
exports.CreateReplyDto = CreateReplyDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsInt)({ message: 'Post ID must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'Post ID must be a positive integer' }),
    __metadata("design:type", Number)
], CreateReplyDto.prototype, "postId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsInt)({ message: 'User ID must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'User ID must be a positive integer' }),
    __metadata("design:type", Number)
], CreateReplyDto.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    (0, class_validator_1.IsInt)({ message: 'Reply ID must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'Reply ID must be a positive integer' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReplyDto.prototype, "replyId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: 'Reply message must be a string' }),
    (0, class_validator_1.Length)(1, 1000, { message: 'Reply message must be between 1 and 1000 characters' }),
    __metadata("design:type", String)
], CreateReplyDto.prototype, "replyMessage", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    (0, class_validator_1.IsDateString)({}, { message: 'Date added must be a valid ISO date string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReplyDto.prototype, "dateAdded", void 0);
exports.CreateReplyDto = CreateReplyDto = __decorate([
    (0, graphql_1.InputType)()
], CreateReplyDto);
//# sourceMappingURL=create-reply.dto.js.map
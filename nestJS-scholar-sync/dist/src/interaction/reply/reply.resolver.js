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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../../common/guards/gql-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const message_response_type_1 = require("../../common/dto/message-response.type");
const user_entity_1 = require("../../auth/user/entities/user.entity");
const reply_service_1 = require("./reply.service");
const reply_entity_1 = require("./entities/reply.entity");
const create_reply_dto_1 = require("./dto/create-reply.dto");
const update_reply_dto_1 = require("./dto/update-reply.dto");
const isAdmin = (user) => user.usersRoles?.some((ur) => ur.role.name === 'Admin');
let ReplyResolver = class ReplyResolver {
    replyService;
    constructor(replyService) {
        this.replyService = replyService;
    }
    replies() {
        return this.replyService.findAll();
    }
    reply(id) {
        return this.replyService.findOne(id);
    }
    createReply(input) {
        return this.replyService.create(input);
    }
    async updateReply(id, input, currentUser) {
        const reply = await this.replyService.findOne(id);
        if (!isAdmin(currentUser) && reply.user.id !== currentUser.id) {
            throw new common_1.ForbiddenException('You can only update your own replies');
        }
        return this.replyService.update(id, input);
    }
    async removeReply(id, currentUser) {
        const reply = await this.replyService.findOne(id);
        if (!isAdmin(currentUser) && reply.user.id !== currentUser.id) {
            throw new common_1.ForbiddenException('You can only delete your own replies');
        }
        await this.replyService.remove(id);
        return { message: `Reply with ID ${id} removed successfully` };
    }
    likeReply(id) {
        return this.replyService.like(id);
    }
    validateReply(id) {
        return this.replyService.validate(id);
    }
};
exports.ReplyResolver = ReplyResolver;
__decorate([
    (0, graphql_1.Query)(() => [reply_entity_1.Reply]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReplyResolver.prototype, "replies", null);
__decorate([
    (0, graphql_1.Query)(() => reply_entity_1.Reply),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReplyResolver.prototype, "reply", null);
__decorate([
    (0, graphql_1.Mutation)(() => reply_entity_1.Reply),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reply_dto_1.CreateReplyDto]),
    __metadata("design:returntype", Promise)
], ReplyResolver.prototype, "createReply", null);
__decorate([
    (0, graphql_1.Mutation)(() => reply_entity_1.Reply),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('input')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reply_dto_1.UpdateReplyDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ReplyResolver.prototype, "updateReply", null);
__decorate([
    (0, graphql_1.Mutation)(() => message_response_type_1.MessageResponse),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ReplyResolver.prototype, "removeReply", null);
__decorate([
    (0, graphql_1.Mutation)(() => reply_entity_1.Reply),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReplyResolver.prototype, "likeReply", null);
__decorate([
    (0, graphql_1.Mutation)(() => reply_entity_1.Reply),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Professor', 'TA'),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReplyResolver.prototype, "validateReply", null);
exports.ReplyResolver = ReplyResolver = __decorate([
    (0, graphql_1.Resolver)(() => reply_entity_1.Reply),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [reply_service_1.ReplyService])
], ReplyResolver);
//# sourceMappingURL=reply.resolver.js.map